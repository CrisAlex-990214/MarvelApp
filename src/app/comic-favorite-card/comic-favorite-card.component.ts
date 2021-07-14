import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from '../models/comic';

@Component({
  selector: 'app-comic-favorite-card',
  templateUrl: './comic-favorite-card.component.html',
  styleUrls: ['./comic-favorite-card.component.css']
})
export class ComicFavoriteCardComponent implements OnInit {

  @Input() comic: Comic;

  @Output() favoriteComicIdToRemove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeFavorite()
  {
    this.favoriteComicIdToRemove.emit(this.comic.id);
  }

}
