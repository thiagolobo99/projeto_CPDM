import {
  DatabaseService,
  sharesToBuyInterfaceNew,
  walletInterfaceNew,
} from './../../database.service';
//import { TypeofExpr } from '@angular/compiler';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
@Component({
  selector: 'app-add-acoes',
  templateUrl: './add-acoes.page.html',
  styleUrls: ['./add-acoes.page.scss'],
})
export class AddAcoesPage implements OnInit {
  @ViewChild('search', { static: false }) search: IonSearchbar;
  private searchedItem: any;
  public ativo = false;
  public selectedValue: sharesToBuyInterfaceNew;
  //public searchedItem :
  //sharesToBuy: sharesToBuyInterface[] = [];

  //public testeW : walletInterfaceNew[];

  public testeNumero: number;
  public quantidadeComprada = 0;

  constructor(
    //@Inject(Globals) private globals:Globals,
    public database: DatabaseService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.selectedValue = null;
  }

  _ionChange(event) {
    const val = event.target.value;

    this.searchedItem = this.database.acoesDisponiveis;

    //debug, depois retirar
    console.log(this.searchedItem);

    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((acao: any) => {
        return acao.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
      this.ativo = true;
    } else {
      this.ativo = false;
      this.selectedValue = null;
    }
  }

  selectAction(value: sharesToBuyInterfaceNew) {
    //console.log(value);
    this.selectedValue = value;
    //this.testeNumero = new Date().valueOf()/ 562252554;
    this.testeNumero = Math.floor(Math.random() * 30000.82);
    //console.log(this.testeNumero);
  }

  private addAcoesNovo(value: sharesToBuyInterfaceNew) {
    //console.log(value);
    this.database.adicionarAcao(value, this.quantidadeComprada);
    this.ativo = null;
    this.quantidadeComprada = 0;
  }
}
