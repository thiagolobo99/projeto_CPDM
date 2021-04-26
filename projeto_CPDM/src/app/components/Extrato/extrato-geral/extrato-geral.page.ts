import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-extrato-geral',
  templateUrl: './extrato-geral.page.html',
  styleUrls: ['./extrato-geral.page.scss'],
})
export class ExtratoGeralPage {

  public saldo

  public extract = [
    {
      date: "14 ABRIL",
      description: "Pao de Acucar",
      value: 129.38,
      type: false
    },
    {
      date: "25 ABRIL",
      description: "Ifood *Ifood",
      value: 24.20,
      type: false
    },
    {
      date: "30 ABRIL",
      description: "Salario",
      value: 2000.00,
      type: true
    },
    {
      date: "23 ABRIL",
      description: "Gastos Gerais",
      value: 200.00,
      type: false
    }
  ]

  ngOnInit() {

    this.calcularSaldo();
  }

  calcularSaldo() {
    var index = this.extract.length
    var i = 0;
    var saldoNegativo = 0;
    var saldoPositivo = 0;
    var resultado = 0;

    while (i < index) {
      if (this.extract[i].type == true) {
        saldoPositivo += this.extract[i].value
      } else {
        saldoNegativo += this.extract[i].value
      }
      i++
    }

    resultado = saldoPositivo - saldoNegativo

    this.saldo = resultado
  }


}
