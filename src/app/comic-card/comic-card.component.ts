import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from '../models/comic';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicCardComponent implements OnInit {

  @Input() comic: Comic;
  @Output() updateCharacter = new EventEmitter<Comic>();
  
  constructor() { }

  ngOnInit(): void {
  }

  favoriteComic(value: boolean)
  {
    this.comic.isFavorite = value;
    this.updateCharacter.emit(this.comic);
  }

}
