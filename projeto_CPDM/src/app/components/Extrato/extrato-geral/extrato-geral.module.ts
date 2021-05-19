import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtratoGeralPageRoutingModule } from './extrato-geral-routing.module';

import { ExtratoGeralPage } from './extrato-geral.page';
import { MenuPrincipalComponent } from '../../../menu-principal/menu-principal.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtratoGeralPageRoutingModule
  ],
  declarations: [
    ExtratoGeralPage,
    MenuPrincipalComponent
  ]
})
export class ExtratoGeralPageModule { }
