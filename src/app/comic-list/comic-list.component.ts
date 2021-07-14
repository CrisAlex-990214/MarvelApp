import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Character } from '../models/character';
import { Comic } from '../models/comic';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

  @Input() character: Character;
  @Input() favoriteComicIdsToAddTag: number[];

  @Output() updateCharacterCard = new EventEmitter<{character: Character,comicId: number}>();

  @ViewChild('frame') content: ModalDirective;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.character.comics = [];
  }

  loadComics()
  {
    if(this.character.comics.length == 0)
    {
      this.heroService.getComics(this.character.id).subscribe(x =>
        {
          this.character.comics = x.data.results;
          this.checkFavoriteComics();
          this.content.show();
        });
    }
    else
    {
      this.checkFavoriteComics();
      this.content.show();
    }
  }

  checkFavoriteComics()
  {
    this.character.comics.forEach(y=>
      {
        if(this.favoriteComicIdsToAddTag.includes(y.id))
          y.isFavorite = true;
        else
          y.isFavorite = false;
      })
  }

  updateCharacter(comic: Comic, comicIndex: number)
  {
    this.character.comics[comicIndex] = comic;
    this.updateCharacterCard.emit({
      character: this.character,
      comicId: comic.id
    });
  }

}
