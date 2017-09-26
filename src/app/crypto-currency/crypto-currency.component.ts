import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.css']
})
export class CryptoCurrencyComponent implements OnInit {

  currentInvestment: number = 10000;

  constructor() { }

  ngOnInit() {
      setInterval(
        () => {
            const loss = Math.random() * 10;
            this.currentInvestment -= loss;
        },
        2000
      );
  }

}
