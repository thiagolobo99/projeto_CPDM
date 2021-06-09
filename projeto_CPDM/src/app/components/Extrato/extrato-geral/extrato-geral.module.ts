import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtratoGeralPageRoutingModule } from './extrato-geral-routing.module';

import { ExtratoGeralPage } from './extrato-geral.page';
import { HomePageModule } from '../../../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtratoGeralPageRoutingModule,
    HomePageModule,
  ],
  declarations: [ExtratoGeralPage],
})
export class ExtratoGeralPageModule {}
