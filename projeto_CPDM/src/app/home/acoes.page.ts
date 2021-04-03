import { Component } from '@angular/core';

interface carteiraComprada{
  symbol: string;
  description: string;
  quantity: number;
  actualValue: number;

}

@Component({
  selector: 'app-home',
  templateUrl: 'acoes.page.html',
  styleUrls: ['acoes.page.scss'],
})
export class AcoesPage {

  constructor() {}



}
