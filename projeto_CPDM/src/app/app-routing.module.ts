import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'carteira-acoes',
    loadChildren: () =>
      import('./acoes/carteira-acoes/carteira-acoes.module').then(
        (m) => m.CarteiraAcoesPageModule
      ),
  },
  {
    path: 'extrato-geral',
    loadChildren: () =>
      import('./components/Extrato/extrato-geral/extrato-geral.module').then(
        (m) => m.ExtratoGeralPageModule
      ),
  },
  {
    path: 'receitas',
    loadChildren: () =>
      import('./receitas/receitas.module').then(
        (m) => m.ReceitasPageModule
      ),
  },
  {
    path: 'despesas',
    loadChildren: () =>
      import('./add-transacao/add-transacao.module').then(
        (m) => m.AddTransacaoPageModule
      ),
  },
  {
    path: 'add-acoes',
    loadChildren: () =>
      import('./acoes/add-acoes/add-acoes.module').then(
        (m) => m.AddAcoesPageModule
      ),
  },
  {
    path: 'categoria',
    loadChildren: () =>
      import('./categorias/categoria/categoria.module').then(
        (m) => m.CategoriaPageModule
      ),
  },
  // {
  //   path: 'receitas',
  //   loadChildren: () =>
  //     import('./receitas/receitas.module').then((m) => m.ReceitasPageModule),
  // },
  // {
  //   path: 'carteira-acoes',
  //   loadChildren: () => import('./acoes/carteira-acoes/carteira-acoes.module').then( m => m.CarteiraAcoesPageModule)
  // },

  // {
  //   path: 'popover/:carteiraComprada', loadChildren: './popover/popover.component.html'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
