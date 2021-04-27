import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTransacaoPageRoutingModule } from './add-transacao-routing.module';

import { AddTransacaoPage } from './add-transacao.page';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { Globals } from '../DAO';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTransacaoPageRoutingModule
  ],
  declarations: [
    AddTransacaoPage,
    MenuPrincipalComponent
  ],
  providers: [
    Globals
  ]
})
export class AddTransacaoPageModule { }
