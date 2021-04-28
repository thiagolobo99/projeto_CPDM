//import { CarteiraAcoesPage } from './../acoes/carteira-acoes/carteira-acoes.page';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
//import { NavParams, PopoverController } from '@ionic/angular';
import { FormsModule }   from '@angular/forms';
import { DatabaseService, sharesToBuyInterfaceNew, walletInterfaceNew} from './../database.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  public quantidadeComprada: number;
  public acaoComprada: walletInterfaceNew;

  //globals: Globals;
  //testeParam = null;

  public walletObject : walletInterfaceNew;

  constructor(private activatedRoute: ActivatedRoute,
    //private navParams: NavParams,
    public database : DatabaseService,
    //globals:Globals,
    ) {

    //this.globals = globals;
  }

  ngOnInit() {

    //this.testeParam = this.activatedRoute.snapshot.paramMap.get('carteiraComprada');
    //this.testeParam = this.navParams.get('id_carteira');
    //this.walletObject = this.navParams.get('wallets');
    //console.log(this.navParams);
    //console.log(this.walletObject);
    //console.log(this.testeParam);
   this.quantidadeComprada = this.walletObject.quantity;
   //this.quantidadeComprada = 0;
  }

  atualizarAcao(){ // acao:number ){
    this.database.atualizarAcao(this.walletObject, this.quantidadeComprada);
  }
  public apagarAcao(){

    this.database.deletarAcao(this.walletObject);


  }
}
