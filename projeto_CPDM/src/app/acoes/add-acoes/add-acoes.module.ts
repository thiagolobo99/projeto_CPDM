import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAcoesPageRoutingModule } from './add-acoes-routing.module';

import { AddAcoesPage } from './add-acoes.page';
import { MenuPrincipalComponent } from 'src/app/menu-principal/menu-principal.component';
import { Globals } from 'src/app/DAO';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAcoesPageRoutingModule
  ],
  declarations: [AddAcoesPage,
  MenuPrincipalComponent],
  providers: [Globals]
})
export class AddAcoesPageModule {}
