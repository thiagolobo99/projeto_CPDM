import { Component, OnInit } from '@angular/core';
import { DatabaseService, walletInterfaceNew } from './../database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public acoesCarteira: walletInterfaceNew[] = [];
  public totalValueWallet: number = 0;
  receita: number = 0;
  despesa: number = 0;
  saldo: number = 0;
  controleTamanho: number = 0;

  constructor(public database: DatabaseService) {}

  ngOnInit() {
    this.getAcoes();
    this.getTotalValueWallet();
    this.calculaSaldo();
  }

  ionViewWillEnter() {
    this.getAcoes();
    this.getTotalValueWallet();
    this.calculaSaldo();
  }

  calculaSaldo() {
    console.log('console calculaSaldo');
    if (this.database.carteiraExtrato.length > this.controleTamanho) {
      this.saldo = 0;
      this.receita = 0;
      this.despesa = 0;
      Number(
        this.database.carteiraExtrato.map((element, index) => {
          if (element.type) {
            this.receita += element.value;
          } else {
            this.despesa += element.value;
          }
        })
      );

      this.saldo =
        Number(this.receita.toFixed(2)) - Number(this.despesa.toFixed(2));
      this.acoesCarteira.forEach((acao) => {
        this.saldo =
          Number(this.saldo.toFixed(2)) + Number(acao.actualValue.toFixed(2));
      });

      this.controleTamanho = this.database.carteiraExtrato.length;
    }
  }

  // novos métodos
  public getAcoes() {
    if (this.database.getAcoesCarteira().length > 0) {
      this.acoesCarteira = this.database.getAcoesCarteira();
    }
  }

  public getTotalValueWallet() {
    this.database.getTotalValue();
    this.totalValueWallet = this.database.totalValueWallet;
  }
}
