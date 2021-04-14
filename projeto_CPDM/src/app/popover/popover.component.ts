//import { CarteiraAcoesPage } from './../acoes/carteira-acoes/carteira-acoes.page';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NavParams, PopoverController } from '@ionic/angular';
import { Globals, wallet } from './../DAO';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  //testeParam = null;

  walletObject = null;

  constructor(private activatedRoute: ActivatedRoute, private navParams: NavParams,) { }

  ngOnInit() {

    //this.testeParam = this.activatedRoute.snapshot.paramMap.get('carteiraComprada');
    //this.testeParam = this.navParams.get('id_carteira');
    //this.walletObject = this.navParams.get('wallets');
    //console.log(this.navParams);
    //console.log(this.walletObject);
    //console.log(this.testeParam);

  }


}
