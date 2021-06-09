import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTransacaoPageRoutingModule } from './add-transacao-routing.module';

import { AddTransacaoPage } from './add-transacao.page';
import { HomePageModule } from '../home/home.module';
import { Globals } from '../DAO';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTransacaoPageRoutingModule,
    HomePageModule,
  ],
  declarations: [AddTransacaoPage],
  providers: [Globals],
})
export class AddTransacaoPageModule {}
