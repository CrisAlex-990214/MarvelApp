import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Character } from '../models/character';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-related-comics',
  templateUrl: './hero-related-comics.component.html',
  styleUrls: ['./hero-related-comics.component.css']
})
export class HeroRelatedComicsComponent {

  @Input() relatedCharacters: Character[];

  constructor() { }

}
