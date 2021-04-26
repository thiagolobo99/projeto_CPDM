import { Component, OnInit } from '@angular/core';

import { Globals } from './../DAO';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  receita: number = 1000.0;
  despesa: number = 500.00;
  saldo: number = 0.0;

  globals: Globals;

  constructor(globals: Globals) {
    this.globals = globals;
    this.calculaSaldo(globals);
  }

  ngOnInit() {}

  calculaSaldo(globals: Globals) {
    this.saldo = Number(this.receita.toFixed(2)) - Number(this.despesa.toFixed(2));
    console.log(this.saldo.toFixed(2));
    globals.stockPortfolio.forEach(s =>{
      this.saldo = Number(this.saldo.toFixed(2)) + Number(s.actualValue.toFixed(2))
    })

  }


}
