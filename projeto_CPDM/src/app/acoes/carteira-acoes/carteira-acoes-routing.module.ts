import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteiraAcoesPage } from './carteira-acoes.page';

const routes: Routes = [
  {
    path: '',
    component: CarteiraAcoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteiraAcoesPageRoutingModule {}
