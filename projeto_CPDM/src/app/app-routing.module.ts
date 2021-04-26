import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'investimentos',
    loadChildren: () => import('./acoes/carteira-acoes/carteira-acoes.module').then( m => m.CarteiraAcoesPageModule)
  },
  {
    path: 'extrato-geral',
    loadChildren: () => import('./components/Extrato/extrato-geral/extrato-geral.module').then( m => m.ExtratoGeralPageModule)
  },
  // {
  //   path: 'popover/:carteiraComprada', loadChildren: './popover/popover.component.html'
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
