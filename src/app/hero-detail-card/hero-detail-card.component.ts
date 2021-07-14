import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-hero-detail-card',
  templateUrl: './hero-detail-card.component.html',
  styleUrls: ['./hero-detail-card.component.css']
})
export class HeroDetailCardComponent {

@Input() character: Character;

  constructor() { }


}
