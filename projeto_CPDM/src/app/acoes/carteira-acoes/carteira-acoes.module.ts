import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarteiraAcoesPageRoutingModule } from './carteira-acoes-routing.module';
import { CarteiraAcoesPage } from './carteira-acoes.page';
import { MenuPrincipalComponent } from '../../menu-principal/menu-principal.component';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteiraAcoesPageRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [CarteiraAcoesPage,
    MenuPrincipalComponent],

})
export class CarteiraAcoesPageModule { }
