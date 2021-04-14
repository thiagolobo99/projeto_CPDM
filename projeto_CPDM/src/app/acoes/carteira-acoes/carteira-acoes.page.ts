import { Globals, wallet } from './../../DAO';
import { getLocaleDateFormat } from '@angular/common';
import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/core';
//Para funcionar o popover
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../popover/popover.component';


//Para funcionar o popover

interface carteira{
  symbol: string;
  description: string;
  quantity: number;
  actualValue: number;
  syncDate: String;
}


@Component({
  selector: 'app-carteira-acoes',
  templateUrl: './carteira-acoes.page.html',
  styleUrls: ['./carteira-acoes.page.scss'],
})

export class CarteiraAcoesPage implements OnInit {

  globals: Globals;



// carteiraComprada: carteira[] = [
// { symbol: "PETR3", description: "Petroleo Brasileiro SA Petrobras", quantity: 500, actualValue: 10150.25, syncDate: new Date().toISOString()},
// { symbol: "SHOW3", description: "Time For Fun", quantity: 200, actualValue: 6000, syncDate: Date.now().toString()},
// { symbol: "MXRF11", description: "Maxi Renda Fundo de Investimento Imobiliario - FII", quantity: 300, actualValue: 3110.50, syncDate: Date.now().toString()},
// { symbol: "BRML3", description: "brMalls", quantity: 100, actualValue: 980, syncDate: Date.now().toString()},
// { symbol: "GGBR4", description: "Gerdau", quantity: 200, actualValue: 3122.00, syncDate: Date.now().toString()},
// ]


  //public testeCart = null;

  constructor(public popoverController:PopoverController, private nav: NavController, globals:Globals,) {
    this.globals = globals;
   }

  ngOnInit() {

    //carteiraComprada : this.globals.stockPortfolio;

    //carteiraComprada = this.globals.stockPortfolio;

  }
  //console.log(ev["srcElement.id"])

  //async presentPopover(ev: any, dados: carteira) {
    async presentPopover(ev: any, wallets: wallet) {

    //console.log(ev["srcElement"].id)

    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps:{
        //id_carteira: ev["srcElement"].id,
        walletObject: wallets

      },
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });

    return await popover.present();
  }

  public updateAction(){

    //this.testeCart = null;
    //this.testeCart = this.navParams.get('atualizaAcao');

  }


}
