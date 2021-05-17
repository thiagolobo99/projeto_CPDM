import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
//import { FormsModule } from '@angular/forms';

import {
  DatabaseService,
  sharesToBuyInterfaceNew,
  walletInterfaceNew,
} from './../database.service';

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

  public walletObject: walletInterfaceNew;

  constructor(
    private activatedRoute: ActivatedRoute,
    public database: DatabaseService,
    private popoverController: PopoverController
  ) {
    //   close() {
    //   this.viewCtrl.dismiss();
    // }
    //this.globals = globals;
  }

  ngOnInit() {
    this.quantidadeComprada = this.walletObject.quantity;
  }

  atualizarAcao() {
    // acao:number ){
    this.database.atualizarAcao(this.walletObject, this.quantidadeComprada);
    this.closePopover();
  }

  public apagarAcao() {
    this.database.deletarAcao(this.walletObject);

    this.closePopover();
  }

  closePopover() {
    this.popoverController.dismiss();
  }
}
