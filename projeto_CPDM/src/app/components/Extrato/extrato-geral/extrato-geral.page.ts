import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {
  DatabaseService,
  extratoInterfaceNew,
} from '../../../database.service';

@Component({
  selector: 'app-extrato-geral',
  templateUrl: './extrato-geral.page.html',
  styleUrls: ['./extrato-geral.page.scss'],
})
export class ExtratoGeralPage implements OnInit {
  constructor(public database: DatabaseService) {}

  public saldo;
  public extratoGeral = this.database.carteiraExtrato

  public extract = [
    // {
    //   date: "14 ABRIL",
    //   description: "Pao de Acucar",
    //   value: 129.38,
    //   type: false
    // },
    // {
    //   date: "25 ABRIL",
    //   description: "Ifood *Ifood",
    //   value: 24.20,
    //   type: false
    // },
    // {
    //   date: "30 ABRIL",
    //   description: "Salario",
    //   value: 2000.00,
    //   type: true
    // },
    // {
    //   date: "23 ABRIL",
    //   description: "Gastos Gerais",
    //   value: 200.00,
    //   type: false
    // }
  ];

  ngOnInit() {
    this.calcularSaldo();
  }

  mostrarConsole() {
    console.log('clicou');

    this.extract = this.database.getCarteiraExtrato().map(() => {});

    console.log(this.extratoGeral);
  }

  calcularSaldo() {
    var index = this.database.getCarteiraExtrato().length;
    var i = 0;
    var saldoNegativo = 0;
    var saldoPositivo = 0;
    var resultado = 0;
    // var extratoGeraNew = this.database.carteiraExtrato

    while (i < index) {
      if (this.extratoGeral[i].type == true) {
        saldoPositivo += this.extratoGeral[i].value;
      } else {
        saldoNegativo += this.extratoGeral[i].value;
      }
      i++;
    }

    resultado = saldoPositivo - saldoNegativo;


    this.database.saldoExtrato = resultado;
    this.saldo = this.database.saldoExtrato;
    this.database.saveAtStorageSaldoExtrato();
  }

}
