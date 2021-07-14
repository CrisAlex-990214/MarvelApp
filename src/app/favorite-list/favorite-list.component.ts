import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../models/character';
import { Comic } from '../models/comic';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements AfterViewInit {

  @Input() characters: Character[];
  @Input() featured: boolean;
  @Input() favoriteComics: Comic[];
  
  charactersShowed = true;

  @Output() characterIdToRemoveFavorite = new EventEmitter<number>();
  @Output() comicIdToRemoveFavorite = new EventEmitter<number>();


  constructor() { 
  }

  ngAfterViewInit(): void {
    document.getElementById("charactersDOM").style.backgroundColor = "#c0c906";
    document.getElementById("charactersDOM").style.color = "black";
    document.getElementById("comics").style.backgroundColor = "inherit";
    document.getElementById("comics").style.color = "white";
  }

  charactersSelected(value: boolean)
  {
    this.charactersShowed = value;
    if(value)
    {
      document.getElementById("comics").style.backgroundColor = "inherit";
      document.getElementById("comics").style.color = "white";
      document.getElementById("charactersDOM").style.backgroundColor = "#c0c906";
      document.getElementById("charactersDOM").style.color = "black";
    }
    else
    {
      document.getElementById("comics").style.backgroundColor = "#c0c906";
      document.getElementById("comics").style.color = "black";
      document.getElementById("charactersDOM").style.backgroundColor = "inherit";
      document.getElementById("charactersDOM").style.color = "white";
    }
  }

  removeFavoriteCharacter(characterId: number)
  {
    this.characters = this.characters.filter(x=> x.id != characterId);
    this.characterIdToRemoveFavorite.emit(characterId);
  }

  removeFavoriteComic(comicId: number)
  {
    this.favoriteComics = this.favoriteComics.filter(x=> x.id != comicId);
    this.comicIdToRemoveFavorite.emit(comicId);
  }

}
