import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'
 
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  publicKey = '3e30bb03614bd4e56fc8f37f71c6a574';
  MD5 = 'dd4973ffcc36a340b96a0813012354a6';
  ts = 1;
  heroesUrl = `https://gateway.marvel.com/v1/public/comics?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.MD5}`;

  //COMIC PARAMETERS
  comicFormat = 'comic';
  comicFormatType = 'comic';
  noVariants = true;
  hasDigitalIssue = false;
  orderBy = 'focDate';
  results = 4;

 constructor(private http: HttpClient) {
  }
  
  getComics(characterId: number): Observable<any> {

    let comicsUrl = `https://gateway.marvel.com/v1/public/comics?format=${this.comicFormat}&formatType=${this.comicFormatType}&noVariants=${this.noVariants}&hasDigitalIssue=${this.hasDigitalIssue}&characters=${characterId}&orderBy=${this.orderBy}&limit=${this.results}&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.MD5}`;
                    
    return this.http.get<any>(comicsUrl);
  }

  getFilteredCharacters(limit: number, offset: number, nameStartsWith: string, orderBy: string): Observable<any> {

    let charactersUrl = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameStartsWith}&orderBy=${orderBy}&limit=${limit}&offset=${offset}&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.MD5}`;
                    
    return this.http.get<any>(charactersUrl);
  }

  getCharacters(limit: number, offset: number, orderBy = 'name'): Observable<any> {

    let charactersUrl = `https://gateway.marvel.com/v1/public/characters?orderBy=${orderBy}&limit=${limit}&offset=${offset}&ts=${this.ts}&apikey=${this.publicKey}&hash=${this.MD5}`;
                    
    return this.http.get<any>(charactersUrl);
  }

  getSeries(url: string): Observable<any> {
    url = url.replace('http','https');
    return this.http.get<any>(`${url}?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.MD5}`);
  }
  
}
