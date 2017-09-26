import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  userText: string;

  rightNow = new Date();

  addDay(myEvent) {
      const dateCopy = new Date(this.rightNow);
      const currentDay = this.rightNow.getDate();
      dateCopy.setDate(currentDay + 1);
      this.rightNow = dateCopy;
  }

  addHour(myEvent) {
    const dateCopy = new Date(this.rightNow);
    const currentDay = this.rightNow.getHours();
    dateCopy.setHours(currentDay + 1);
    this.rightNow = dateCopy;
  }
}
