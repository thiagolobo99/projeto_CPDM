import { DatabaseService, walletInterfaceNew } from './../../database.service';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';

//Para funcionar o popover
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../popover/popover.component';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-carteira-acoes',
  templateUrl: './carteira-acoes.page.html',
  styleUrls: ['./carteira-acoes.page.scss'],
})
export class CarteiraAcoesPage implements OnInit {
  public acoesCarteira: walletInterfaceNew[] = [];
  public totalValueWallet: number = 0;

  constructor(
    public popoverController: PopoverController,
    public database: DatabaseService
  ) { }

  ngOnInit() {
    this.getAcoes();
  }

  ionViewWillEnter() {
    this.getAcoes();
    this.getTotalValueWallet();
  }

  async presentPopover(ev: any, wallets: walletInterfaceNew) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        walletObject: wallets,
      },
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }

  // novos métodos
  public getAcoes() {
    if (this.database.getAcoesCarteira().length > 0) {
      this.acoesCarteira = this.database.getAcoesCarteira();
    }
  }

  public getTotalValueWallet() {
    this.database.getTotalValue();
  }

  public syncAllStocks() {
    this.database.syncAllStockValue();
  }

  public loadLabdoStock() {
    this.database.loadLabdoStock();
  }
}
