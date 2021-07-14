import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent{

  @Output() byName = new EventEmitter<boolean>();
  @Output() featured = new EventEmitter<boolean>();
  @Output() textSearch = new EventEmitter<string>();

  textChanged = new Subject<string>();
  text: string;

  constructor() { 
    this.textChanged.pipe(
      debounceTime(1000) // wait 1000ms after the last event before emitting last event
      ,distinctUntilChanged()) // only emit if value is different from previous value
      .subscribe((x: string) =>
      { 
        this.text = x
        this.textSearch.emit(x);
      });
  }


  searchText(text: string) 
  {
    this.textChanged.next(text);
  }

  byAttribute(byName: boolean)
  {
    this.byName.emit(byName); 
  }

}
