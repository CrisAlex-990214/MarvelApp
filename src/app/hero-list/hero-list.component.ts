import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constants } from '../constants';
import { Character } from '../models/character';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit{

  @Input() characters: Character[];
  @Input() IdToRemoveForfavoriteComic: number;
  @Input() charactersCount: number;
  @Input() favoriteComicIdsToAddTag: number[];

  @Output() favoriteCharacterId = new EventEmitter<number>();
  @Output() featuredCharacters = new EventEmitter<boolean>();
  @Output() characterComics = new EventEmitter<{character: Character, comicId: number}>();
  @Output() charactersToCheckFavoriteTags = new EventEmitter<Character[]>();

  charactersShowed: Character[];

  featured = false;
  pageSize = Constants.CHARACTERS_PER_PAGE;
  currentPage = 0;

  textToFilter = '';
  orderBy = '';

  loading = false;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.charactersShowed = this.characters;
  }

  changeCharactersShowed(page: number)
  {
    this.currentPage = page;
    this.updateCharacters(page);
  }

  updateCharacters(page: number)
  {
    this.loading = true;

    if(this.textToFilter.length > 0)
    {
    this.heroService.getFilteredCharacters(Constants.CHARACTERS_PER_PAGE,page*Constants.CHARACTERS_PER_PAGE
                                  ,this.textToFilter,this.orderBy).subscribe(x =>
      {
        this.loadCharacters(x);
      });  
    }

    else
    {
    this.heroService.getCharacters(Constants.CHARACTERS_PER_PAGE,page*Constants.CHARACTERS_PER_PAGE
                                  ,this.orderBy).subscribe(x =>
      {
        this.loadCharacters(x);
      });  
    }
  }

  loadCharacters(x: any)
  {
    this.charactersCount = x.data.total;
    setTimeout(() => {   
      this.charactersShowed = x.data.results;
      this.charactersToCheckFavoriteTags.emit(this.charactersShowed);
      this.loading = false;
     }, 1000);
  }

  showCharacterImages(featured: boolean)
  {
    this.featured = featured;
    this.featuredCharacters.emit(featured);
  }
  
  updateFavoriteList(characterId: number)
  {
    this.favoriteCharacterId.emit(characterId);
  }

  updateCharacterComics(data: {character: Character, comicId: number})
  {
    this.characterComics.emit(data);
  }

  filterByText(text: string)
  {
    this.textToFilter = text;
    this.currentPage = 0;
    this.updateCharacters(0);
  }

  filterByAttribute(byName: boolean)
  {
    this.orderBy = byName ? 'name' : 'modified';  
    this.updateCharacters(this.currentPage);
  }

}
