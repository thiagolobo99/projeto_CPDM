import { Globals } from './../../DAO';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteiraAcoesPageRoutingModule } from './carteira-acoes-routing.module';

import { CarteiraAcoesPage } from './carteira-acoes.page';
import { MenuPrincipalComponent } from 'src/app/menu-principal/menu-principal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteiraAcoesPageRoutingModule
  ],
  declarations: [CarteiraAcoesPage,
  MenuPrincipalComponent],
  providers: [Globals]
})
export class CarteiraAcoesPageModule {}
