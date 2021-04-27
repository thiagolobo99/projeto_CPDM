import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtratoGeralPage } from './extrato-geral.page';

const routes: Routes = [
  {
    path: '',
    component: ExtratoGeralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtratoGeralPageRoutingModule { }
