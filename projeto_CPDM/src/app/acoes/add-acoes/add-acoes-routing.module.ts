import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAcoesPage } from './add-acoes.page';

const routes: Routes = [
  {
    path: '',
    component: AddAcoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAcoesPageRoutingModule {}
