import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../models/comic';

@Component({
  selector: 'app-comic-detail-favorite-card',
  templateUrl: './comic-detail-favorite-card.component.html',
  styleUrls: ['./comic-detail-favorite-card.component.css']
})
export class ComicDetailFavoriteCardComponent implements OnInit {

  @Input() comic: Comic;

  constructor() { }

  ngOnInit(): void {
  }

}
