import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaPageRoutingModule } from './categoria-routing.module';

import { CategoriaPage } from './categoria.page';
import { MenuPrincipalComponent } from '../../menu-principal/menu-principal.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CategoriaPageRoutingModule],
  declarations: [CategoriaPage, MenuPrincipalComponent],
})
export class CategoriaPageModule {}
