import { Globals } from './../../DAO';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAcoesPageRoutingModule } from './add-acoes-routing.module';

import { AddAcoesPage } from './add-acoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAcoesPageRoutingModule
  ],
  declarations: [AddAcoesPage],
  providers: [Globals]
})
export class AddAcoesPageModule {}
