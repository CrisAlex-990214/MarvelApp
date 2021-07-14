import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character';
@Component({
  selector: 'app-hero-modal-card',
  templateUrl: './hero-modal-card.component.html',
  styleUrls: ['./hero-modal-card.component.css']
})
export class HeroModalCardComponent implements OnInit {

  @Input() character: Character;
  @Input() imageLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
