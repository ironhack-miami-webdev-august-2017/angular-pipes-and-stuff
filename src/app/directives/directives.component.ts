import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  user: any = {};

  heading: any = {
      isBig: false,
      isComic: false,
      isColorful: false
  };

  animals: any[] = [
    {
        id: 1,
        category: 'mammal',
        name: 'Dog'
    }, {
        id: 2,
        category: 'oviparous',
        name: 'Duck'
    }, {
        id: 3,
        category: 'mammal',
        name: 'Elephant'
    }, {
        id: 4,
        category: 'reptile',
        name: 'Snake'
    }
  ];

  textColorValue: string = 'black';

  constructor() { }

  ngOnInit() {
      setInterval(
          () => {
              const r = Math.floor(Math.random() * 256);
              const g = Math.floor(Math.random() * 256);
              const b = Math.floor(Math.random() * 256);

              this.textColorValue = `rgb(${r}, ${g}, ${b})`;
          },
          5000
      );
  }

  sizeChange() {
      // this.heading.isBig = !this.heading.isBig;

      if (this.heading.isBig) {
        this.heading.isBig = false;
      }
      else {
        this.heading.isBig = true;
      }
  } // sizeChange()

  fontChange() {
      // this.heading.isComic = !this.heading.isComic;

      if (this.heading.isComic) {
        this.heading.isComic = false;
      }
      else {
        this.heading.isComic = true;
      }
  } // fontChange()

  colorChange() {
      // this.heading.isColorful = !this.heading.isColorful;

      if (this.heading.isColorful) {
        this.heading.isColorful = false;
      }
      else {
        this.heading.isColorful = true;
      }
  } // colorChange()

}
