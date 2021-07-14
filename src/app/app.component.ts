import { Component, OnInit } from '@angular/core';
import { Constants } from './constants';
import { HeroData } from './data/hero-data';
import { Character } from './models/character';
import { Comic } from './models/comic';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  characters: Character[];
  favoriteCharacters: Character[] = [];
  favoriteCharacterIdsToAddTag: number[] = [];
  favoriteComicIdsToAddTag: number[] = [];
  allCharactersCount: number;
  favoriteComics: Comic[] = [];
  featured = false;

  heroData: HeroData = new HeroData();

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {

    this.heroService.getCharacters(Constants.CHARACTERS_PER_PAGE,0).subscribe(x =>
      {
        this.allCharactersCount = x.data.total;
        this.characters = x.data.results;
        this.characters.forEach(x=>
          { 
            if(x.id%2 == 0)
            {
              x.isFavorite = true;
              this.favoriteCharacters.push(x);
              this.favoriteCharacterIdsToAddTag.push(x.id);
            }
              
          });
        
      });

    //this.heroes = this.heroData.createDb();
    
  }

  updateFavoriteList(characterId: number)
  {
    let character = this.characters.find(x=> x.id == characterId);

    if(this.favoriteCharacters.find(x=> x.id == characterId))
    {
      this.favoriteCharacters = this.favoriteCharacters.filter(x=> x.id!=characterId);
      this.favoriteCharacterIdsToAddTag.splice(this.favoriteCharacterIdsToAddTag.indexOf(characterId),1);
    }
    else
    {
      this.favoriteCharacters.unshift(character);
      this.favoriteCharacterIdsToAddTag.push(characterId);
    }
  }

  checkFavoriteTags(newCharacters: Character[])
  {
    this.characters = newCharacters;
    this.characters.forEach(x=>
      {
        if(this.favoriteCharacterIdsToAddTag.includes(x.id))
          x.isFavorite = true;
      });
  }

  updateCharacterComics(data: {character: Character, comicId: number})
  {
    let comic = data.character.comics.find(x=> x.id == data.comicId); 
    
    if(comic.isFavorite)
    {
     this.favoriteComics.unshift(comic);
     this.favoriteComicIdsToAddTag.push(data.comicId);
    }
    else
    {
      this.favoriteComics = this.favoriteComics.filter(x => x.id!=comic.id);
      this.favoriteComicIdsToAddTag.splice(this.favoriteComicIdsToAddTag.indexOf(data.comicId),1);
    }

  }

  updateFeaturedFavoriteCharacters(value: boolean)
  {
    this.featured = value;
  }

  removeFavoriteTagForCharacter(characterId: number)
  {
    let character = this.characters.find(x=> x.id == characterId);
    
    if(character)
      character.isFavorite = false;

    this.favoriteCharacterIdsToAddTag.splice(this.favoriteCharacterIdsToAddTag.indexOf(characterId),1);

    this.favoriteCharacters = this.favoriteCharacters.filter(x=> x.id != characterId);
  }

  removeFavoriteComic(comicId: number)
  {
    this.favoriteComicIdsToAddTag.splice(this.favoriteComicIdsToAddTag.indexOf(comicId),1);
    this.favoriteComics = this.favoriteComics.filter(x=> x.id != comicId);
  }

}
