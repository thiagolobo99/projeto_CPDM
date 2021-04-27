import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD:AddTransacoes/src/app/AddTransacoes/AddTransacoes.module.ts
import { HomePage } from './AddTransacoes';
=======
 import { HomePage } from './home.page';
>>>>>>> origin/main:projeto_CPDM/src/app/home/home-routing.module.ts

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
