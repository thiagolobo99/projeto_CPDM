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
  receita: number = 1000.0;
  despesa: number = 500.00;
  saldo: number = 0.0;


  constructor(public database: DatabaseService) {
   
  }

  ngOnInit() {
    this.calculaSaldo();
  }

  ionViewWillEnter() {
    this.calculaSaldo();

  }

  calculaSaldo() {
    this.getAcoes();
    this.getTotalValueWallet();
    this.saldo = Number(this.receita.toFixed(2)) - Number(this.despesa.toFixed(2));
    this.acoesCarteira.forEach(s =>{
      this.saldo = Number(this.saldo.toFixed(2)) + Number(s.actualValue.toFixed(2))
    })

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
