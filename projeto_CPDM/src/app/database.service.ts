import { Injectable } from '@angular/core';

//import {} from '@ionic/storage-angular';
import { Storage } from '@ionic/storage';

// tslint:disable-next-line: class-name
export interface walletInterfaceNew {
  symbol: string;
  description: string;
  quantity: number;
  actualValue: number;
  syncDate: string;
}
export interface categoriaInterface{
  name: string;
  type: string;
}
// tslint:disable-next-line: class-name
export interface sharesToBuyInterfaceNew {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string; // colocar horário
  marketClose: string;
  timeZone: string;
  currency: string;
  matchScore: number;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  carteiraAcoes: walletInterfaceNew[] = [];
  acoesDisponiveis: sharesToBuyInterfaceNew[] = [];
  public totalValueWallet: number = 0;
  categorias: categoriaInterface[] = [];

  constructor(public storage: Storage) {
    this.loadFromStorage();
    this.loadValues();
  }

  //Implementar armazenamento
  private async loadFromStorage() {
    const storedWallet = (await this.storage.get(
      'carteiraAcoes'
    )) as walletInterfaceNew[];
    if (storedWallet) {
      this.carteiraAcoes.push(...storedWallet);
    }

    const storedCategoria = (await this.storage.get('categorias')) as categoriaInterface[];
    if (storedCategoria) {
      this.categorias.push(...storedCategoria);
    }

    //console.log('Método loadFromStorage');
  }

  //Implementar armazenamento
  private saveAtStorage() {
    this.storage.set('carteiraAcoes', this.carteiraAcoes);
    this.storage.set('categorias', this.categorias);
    console.log('Método saveAtStorage');
  }

//  adicionarCategoria (categoria: categoriainterface) {
  adicionarCategoria (name: string, type: string) {
    this.categorias.push({
     name:name,
     type:type,
    });
    console.log(this.categorias);
  }

  adicionarAcao(acao: sharesToBuyInterfaceNew, quantidadeComprada: number) {
    this.carteiraAcoes.push({
      symbol: acao.symbol,
      description: acao.name,
      quantity: quantidadeComprada, // colocar aqui a quantidade do input
      actualValue: Math.floor(Math.random() * 30000.82), //colocar aqui o valor de acordo com o webservice
      syncDate: new Date().toISOString(),
    });

    //Implementar armazenamento
    this.saveAtStorage();

    this.getTotalValue();
  }

  public loadValues() {
    this.categorias = [];
    this.categorias.push(
      {
        name: 'aluguel',
        type: 'Despesa',
      },

      {
        name: 'Salário',
        type: 'Receita',
      },

      {
        name: 'Conta de telefone',
        type: 'Despesa',
      },

      {
        name: 'Mercado',
        type: 'Despesa',
      },
      {
        name: 'Aplicação',
        type: 'Receita',
      },

      {
        name: 'Faculdade',
        type: 'Despesa',
      },
    );

    this.acoesDisponiveis = [];
    this.acoesDisponiveis.push(
      {
        symbol: 'MAGS',
        name: 'Magal Security Systems Ltd USA',
        type: 'Equity',
        region: 'United States',
        marketOpen: '09:30',
        marketClose: '16:00',
        timeZone: 'UTC-04',
        currency: 'USD',
        matchScore: 0.75,
      },
      {
        symbol: 'MGLUY',
        name: 'Magazine Luiza SA',
        type: 'Equity',
        region: 'United States',
        marketOpen: '09:30',
        marketClose: '16:00',
        timeZone: 'UTC-04',
        currency: 'USD',
        matchScore: 0.4444,
      },
      {
        symbol: 'MGLU3.SAO',
        name: 'Magazine Luiza S.A',
        type: 'Equity',
        region: 'Brazil/Sao Paolo',
        marketOpen: '10:00',
        marketClose: '17:30',
        timeZone: 'UTC-03',
        currency: 'BRL',
        matchScore: 0.3636,
      },
      {
        symbol: '540650.BSE',
        name: 'Magadh Sugar & Energy Limited',
        type: 'Equity',
        region: 'India/Bombay',
        marketOpen: '09:15',
        marketClose: '15:30',
        timeZone: 'UTC+5.5',
        currency: 'INR',
        matchScore: 0.2424,
      },
      {
        symbol: 'PETRY',
        name: 'Petrobras Distribuidora S.A.',
        type: 'Equity',
        region: 'United States',
        marketOpen: '09:30',
        marketClose: '16:00',
        timeZone: 'UTC-04',
        currency: 'USD',
        matchScore: 0.8,
      },
      {
        symbol: 'PTR',
        name: 'PetroChina Co. Ltd',
        type: 'Equity',
        region: 'United States',
        marketOpen: '09:30',
        marketClose: '16:00',
        timeZone: 'UTC-04',
        currency: 'USD',
        matchScore: 0.75,
      },
      {
        symbol: 'PZE',
        name: 'Petrobras Argentina SA',
        type: 'Equity',
        region: 'United States',
        marketOpen: '09:30',
        marketClose: '16:00',
        timeZone: 'UTC-04',
        currency: 'USD',
        matchScore: 0.5,
      },
      {
        symbol: 'PEFGF',
        name: 'Petrobras Energ  Ord',
        type: 'Equity',
        region: 'United States',
        marketOpen: '09:30',
        marketClose: '16:00',
        timeZone: 'UTC-04',
        currency: 'USD',
        matchScore: 0.4,
      },
      {
        symbol: 'PTIFF',
        name: 'Petroceltic Intl Ord',
        type: 'Equity',
        region: 'United States',
        marketOpen: '09:30',
        marketClose: '16:00',
        timeZone: 'UTC-04',
        currency: 'USD',
        matchScore: 0.4,
      },
      {
        symbol: '601857.SHH',
        name: 'PetroChina Company Ltd',
        type: 'Equity',
        region: 'Shanghai',
        marketOpen: '09:30',
        marketClose: '15:00',
        timeZone: 'UTC+08',
        currency: 'CNY',
        matchScore: 0.3704,
      },
      {
        symbol: 'PC6A.FRK',
        name: 'PetroChina Company Limited',
        type: 'Equity',
        region: 'Frankfurt',
        marketOpen: '08:00',
        marketClose: '20:00',
        timeZone: 'UTC+02',
        currency: 'EUR',
        matchScore: 0.3226,
      },
      {
        symbol: 'PC6.FRK',
        name: 'PetroChina Company Limited',
        type: 'Equity',
        region: 'Frankfurt',
        marketOpen: '08:00',
        marketClose: '20:00',
        timeZone: 'UTC+02',
        currency: 'EUR',
        matchScore: 0.3226,
      },
      {
        symbol: 'BRDT3.SAO',
        name: 'Petrobras Distribuidora S.A',
        type: 'Equity',
        region: 'Brazil/Sao Paolo',
        marketOpen: '10:00',
        marketClose: '17:30',
        timeZone: 'UTC-03',
        currency: 'BRL',
        matchScore: 0.3125,
      },
      {
        symbol: 'PCCYF',
        name: 'PetroChina Co. Ltd - Class H',
        type: 'Equity',
        region: 'United States',
        marketOpen: '09:30',
        marketClose: '16:00',
        timeZone: 'UTC-04',
        currency: 'USD',
        matchScore: 0.303,
      }
    );

    //Colocar aqui para retirar ações já compradas
  }

  getAcoesCarteira() {
    return this.carteiraAcoes;
  }

  deletarAcao(acao: walletInterfaceNew) {
    const indexApagar = this.carteiraAcoes.findIndex(
      (index: walletInterfaceNew) => {
        return index.symbol === acao.symbol;
      }
    );
    if (indexApagar != -1) {
      this.carteiraAcoes.splice(indexApagar, 1);
    }
    //console.log(this.carteiraAcoes);
    this.saveAtStorage();
    this.getTotalValue();
  }

deletarCategoria(categoria:categoriaInterface){
  console.log(categoria);

  const indexApagar = this.categorias.findIndex(
    (index: categoriaInterface) => {
      return index.name === categoria.name;
    }
  );
  if (indexApagar != -1) {
    this.categorias.splice(indexApagar, 1);
  }
  //console.log(this.carteiraAcoes);
}




  getTotalValue() {
    this.totalValueWallet = 0;
    for (let index = 0; index < this.carteiraAcoes.length; index++) {
      this.totalValueWallet =
        this.totalValueWallet.valueOf() +
        this.carteiraAcoes[index].actualValue.valueOf();
    }
  }

  atualizarAcao(acao: walletInterfaceNew, novoValor: number) {
    //Funcionando!
    const indexAtualizar = this.carteiraAcoes.findIndex(
      (index: walletInterfaceNew) => {
        return index.symbol === acao.symbol;
      }
    );
    if (indexAtualizar != -1) {
      acao.quantity = novoValor;
    }
    this.getTotalValue();
    this.saveAtStorage();
  }




}
