import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'carteira-acoes',
    pathMatch: 'full'
  },
  {
    path: 'carteira-acoes',
    loadChildren: () => import('./acoes/carteira-acoes/carteira-acoes.module').then( m => m.CarteiraAcoesPageModule)
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
