import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-hero-favorite-card',
  templateUrl: './hero-favorite-card.component.html',
  styleUrls: ['./hero-favorite-card.component.css']
})
export class HeroFavoriteCardComponent implements OnInit {

  @Input() character: Character;

  @Output() favoriteCharacterIdToRemove = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  removeFavorite()
  {
    this.favoriteCharacterIdToRemove.emit(this.character.id);
  }

}
