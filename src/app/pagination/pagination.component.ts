import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, AfterViewInit{

  @Input() pageSize: number;
  @Input() currentPage: number;

  _charactersCount = 0;
  @Input() set charactersCount(value: number) {
    this._charactersCount = value;

    if(this._charactersCount != 0)
    {
        this.updatePages(0);
        this.resetPageColorButtons();
        this.changeButtonColors(0);
        this.currentPage = 0;
        
    }
  }

  @Output() page = new EventEmitter<number>();

  pages = new Array<number>(Constants.DEFAULT_PAGE_NUMBER);
  morePages = true;

  constructor() { }

  ngOnInit(): void {
    
    for (let  i = 0; i < this.pages.length; i++)
      this.pages[i] = i;
  }

  ngAfterViewInit(): void {

    for (let i = 0; i < document.getElementsByName("button").length; i++)
    {
      document.getElementsByName("button")[i].style.backgroundColor = "#181a1b";
      document.getElementsByName("button")[i].style.color = "#005ead";
    }

    this.changeButtonColors(0);

    document.getElementById("previous").style.backgroundColor = "#181a1b";
    document.getElementById("previous").style.color = "#005ead";

    document.getElementById("next").style.backgroundColor = "#181a1b";
    document.getElementById("next").style.color = "#005ead";

  }

  updatePages(initialPage: number)
  {
    this.morePages = true;

    if(Math.ceil(this._charactersCount/this.pageSize) < Constants.DEFAULT_PAGE_NUMBER)
        this.pages = new Array(Math.ceil(this._charactersCount/this.pageSize));
    else
      this.pages = new Array<number>(Constants.DEFAULT_PAGE_NUMBER);
      
      for (let  i = 0; i < this.pages.length; i++)
        this.pages[i] = initialPage+i;
  }

  goToPage(newPage: number) 
  { 
    if(newPage!=this.currentPage)
    {
      //Previous list page
      if( newPage < this.pages[0])
      {
        let initialPage = this.pages[0] - Constants.DEFAULT_PAGE_NUMBER;
        this.updatePages(initialPage);
        this.resetPageColorButtons();

      }

      //Next list page
      else if( newPage > this.pages[this.pages.length-1])
      {
        let initialPage = this.pages[0] + Constants.DEFAULT_PAGE_NUMBER;
        this.updatePages(initialPage);
        this.resetPageColorButtons();
        
      }

      else
      this.morePages = newPage<this.pages[this.pages.length-1] || 
                       (Math.floor(this._charactersCount/this.pageSize)>this.pages[this.pages.length-1]);

      this.changeButtonColors(newPage);
      this.page.emit(newPage);
    }
  }

  changeButtonColors(newPage: number)
  {
    if(document.getElementsByName("button").length !=0)
    {
      document.getElementsByName("button")[this.currentPage%Constants.DEFAULT_PAGE_NUMBER].style.color = "#005ead";
      document.getElementsByName("button")[this.currentPage%Constants.DEFAULT_PAGE_NUMBER].style.backgroundColor = "#181a1b";
      
      setTimeout(()=> 
      {
        document.getElementsByName("button")[newPage%Constants.DEFAULT_PAGE_NUMBER].style.backgroundColor = "#005ead";
        document.getElementsByName("button")[newPage%Constants.DEFAULT_PAGE_NUMBER].style.color = "#e8e6e3";
      },200);
         
    }
  }

  resetPageColorButtons()
  {
    setTimeout(()=> 
    {
      for (let i = 0; i < document.getElementsByName("button").length; i++)
      {
        document.getElementsByName("button")[i].style.backgroundColor = "#181a1b";
        document.getElementsByName("button")[i].style.color = "#005ead";
      }
    },200);
  }

}
