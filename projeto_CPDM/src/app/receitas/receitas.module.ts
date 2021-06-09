import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitasPageRoutingModule } from './receitas-routing.module';

import { ReceitasPage } from './receitas.page';
import { Globals } from '../DAO';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitasPageRoutingModule,
    HomePageModule,
  ],
  declarations: [ReceitasPage],
  providers: [Globals],
})
export class ReceitasPageModule {}
