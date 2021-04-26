import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './AddTransacoes';

<<<<<<< HEAD:AddTransacoes/src/app/AddTransacoes/home.module.ts
import { HomePageRoutingModule } from './AddTransacoes.module';
=======
import { HomePageRoutingModule } from './home-routing.module';
import { Globals } from './../DAO';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
>>>>>>> origin/main:projeto_CPDM/src/app/home/home.module.ts


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    MenuPrincipalComponent
  ],
  providers: [Globals]
})
export class HomePageModule {}
