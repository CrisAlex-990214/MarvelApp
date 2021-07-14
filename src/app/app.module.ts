import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './/pagination/pagination.component';
import { FilterComponent } from './/filter/filter.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroFavoriteCardComponent } from './hero-favorite-card/hero-favorite-card.component';
import { HeroDetailCardComponent } from './hero-detail-card/hero-detail-card.component';
import { HeroRelatedComicsComponent } from './hero-related-comics/hero-related-comics.component';
import { HeroDetailFavoriteCardComponent } from './hero-detail-favorite-card/hero-detail-favorite-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroModalCardComponent } from './hero-modal-card/hero-modal-card.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicCardComponent } from './comic-card/comic-card.component';
import { ComicFavoriteCardComponent } from './comic-favorite-card/comic-favorite-card.component';
import { ComicDetailFavoriteCardComponent } from './comic-detail-favorite-card/comic-detail-favorite-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    FilterComponent,
    HeroListComponent,
    FavoriteListComponent,
    HeroCardComponent,
    HeroFavoriteCardComponent,
    HeroDetailCardComponent,
    HeroRelatedComicsComponent,
    HeroDetailFavoriteCardComponent,
    HeroModalCardComponent,
    ComicListComponent,
    ComicCardComponent,
    ComicFavoriteCardComponent,
    ComicDetailFavoriteCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
