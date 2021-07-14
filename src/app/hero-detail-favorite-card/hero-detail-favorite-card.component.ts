import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { Serie } from '../models/serie';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail-favorite-card',
  templateUrl: './hero-detail-favorite-card.component.html',
  styleUrls: ['./hero-detail-favorite-card.component.css']
})
export class HeroDetailFavoriteCardComponent implements OnInit {

  @Input() character: Character;

  series: Serie[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  loadSeries()
  {
    if(this.series.length == 0)
    {
      for (let i = 0; i < this.character.series.items.length; i++) {
        this.heroService.getSeries(this.character.series.items[i].resourceURI).subscribe(x=> 
          {
            this.series.push(x.data.results[0]);
          });
      }
      
    }
  }



}
