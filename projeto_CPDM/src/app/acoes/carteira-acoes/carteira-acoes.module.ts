import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteiraAcoesPageRoutingModule } from './carteira-acoes-routing.module';

import { CarteiraAcoesPage } from './carteira-acoes.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteiraAcoesPageRoutingModule
  ],
  declarations: [CarteiraAcoesPage],
})
export class CarteiraAcoesPageModule {}
