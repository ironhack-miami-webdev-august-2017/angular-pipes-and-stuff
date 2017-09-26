import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-search',
  templateUrl: './rock-search.component.html',
  styleUrls: ['./rock-search.component.css']
})
export class RockSearchComponent implements OnInit {

  mySearchTerm: string;

  theRocks: any[] = [
    {
      name: 'Wrestler The Rock',
      imageUrl: 'https://media.giphy.com/media/V53jWRdPWwO0U/giphy.gif'
    }, {
      name: 'Turtle Neck The Rock',
      imageUrl: 'https://media.giphy.com/media/AjkKC77JZVCEg/giphy.gif'
    }, {
      name: 'Afro The Rock',
      imageUrl: 'https://media.giphy.com/media/hvfjWwcldku40/giphy.gif'
    }, {
      name: 'Disney The Rock',
      imageUrl: 'https://media.giphy.com/media/26ufbuJkdEJPKvQ9W/giphy.gif'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
