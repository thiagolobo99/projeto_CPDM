import {
  DatabaseService,
  sharesToBuyInterfaceNew,
  walletInterfaceNew,
  labdoStock,
} from './../../database.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
@Component({
  selector: 'app-add-acoes',
  templateUrl: './add-acoes.page.html',
  styleUrls: ['./add-acoes.page.scss'],
})
export class AddAcoesPage implements OnInit {
  @ViewChild('search', { static: false }) search: IonSearchbar;
  public searchedItem: any;
  public ativo = false;
  public selectedValue: labdoStock;
  //public testeNumero: number;
  public quantidadeComprada = 0;

  constructor(
    //@Inject(Globals) private globals:Globals,
    public database: DatabaseService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.selectedValue = null;
    this.database.loadLabdoStock();
  }

  _ionChange(event) {
    const val = event.target.value;

    this.searchedItem = this.database.labdoStock;

    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((acao: any) => {
        //Original
        //return acao.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
        return acao.nm_empresa.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
      this.ativo = true;
    } else {
      this.ativo = false;
      this.selectedValue = null;
    }
  }

  selectAction(value: labdoStock) {
    this.selectedValue = value;
  }
  public addAcoesNovo(value: labdoStock) {
    //console.log(value);
    this.database.adicionarAcao(value, this.quantidadeComprada);
    this.ativo = null;
    this.quantidadeComprada = 0;
  }
}
