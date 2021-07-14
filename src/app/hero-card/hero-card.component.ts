import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() character: Character;
  @Input() featured: boolean;
  @Input() favoriteComicIdsToAddTag: number[];

  @Output() updateCharacterComics = new EventEmitter<{character: Character, comicId: number}>();
  @Output() characterFavoriteId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    
  }

  favoriteCharacter(value: boolean)
  {
    this.character.isFavorite = value;
    this.characterFavoriteId.emit(this.character.id);
  }

  updateCharacter(data: {character: Character, comicId: number})
  {
    this.character = data.character;
    this.updateCharacterComics.emit(data);
  }

}
