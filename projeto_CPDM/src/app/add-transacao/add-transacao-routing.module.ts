import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTransacaoPage } from './add-transacao.page';

const routes: Routes = [
  {
    path: '',
    component: AddTransacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTransacaoPageRoutingModule {}
