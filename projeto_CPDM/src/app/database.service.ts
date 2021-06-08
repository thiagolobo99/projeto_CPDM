import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StockService } from './stock.service';

export interface extratoInterfaceNew {
  description: string;
  value: number;
  type: boolean;
}
export interface walletInterfaceNew {
  symbol: string;
  description: string;
  quantity: number;
  actualValue: number;
  syncDate: string;
}
export interface categoriaInterface {
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
export interface GlobalQuote {
  symbol: string;
  open: string;
  high: string;
  low: string;
  price: string;
  volume: string;
  latestTradingDay: string;
  previousClose: string;
  change: string;
  changePercent: string;
}

export interface labdoStock {
  id: number;
  cd_acao: string;
  cd_acao_rdz: string;
  nm_empresa: string;
  pctl_ctra: number;
  qtd_teorica: any;
  created_at: Date;
  updated_at: Date;
}

export interface labdoLastQuotedValue {
  id: number;
  tp_reg: number;
  dt_pregao: number;
  cd_bdi: string;
  cd_acao: string;
  tp_merc: number;
  nm_empresa_rdz: string;
  especi: string;
  prazot: string;
  moeda_ref: string;
  vl_abertura: number;
  vl_maximo: number;
  vl_minimo: number;
  vl_medio: number;
  vl_fechamento: number;
  vl_mlh_oft_compra: number;
  vl_mlh_oft_venda: number;
  vl_ttl_neg: number;
  qt_tit_neg: number;
  vl_volume: number;
  vl_exec_opc: number;
  in_opc: string;
  dt_vnct_opc: number;
  ft_cotacao: number;
  vl_exec_moeda_corrente: number;
  cd_isin: string;
  cd_acao_rdz: string;
  created_at: Date;
  updated_at: Date;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  carteiraExtrato: extratoInterfaceNew[] = [];
  carteiraAcoes: walletInterfaceNew[] = [];
  acoesDisponiveis: sharesToBuyInterfaceNew[] = [];
  public totalValueWallet: number = 0;
  categorias: categoriaInterface[] = [];
  public labdoStock: labdoStock;
  public labdoLastQuotedValue: labdoLastQuotedValue;
  public id: number;
  public saldoExtrato: number;

  constructor(public storage: Storage, public stockService: StockService) {
    this.loadFromStorage();
    this.loadFromStorageExtrato();
    //this.loadValues();
  }

  private async loadFromStorage() {
    const storedWallet = (await this.storage.get(
      'carteiraAcoes'
    )) as walletInterfaceNew[];
    if (storedWallet) {
      this.carteiraAcoes.push(...storedWallet);
    }

    const storedCategoria = (await this.storage.get(
      'categorias'
    )) as categoriaInterface[];
    if (storedCategoria) {
      this.categorias.push(...storedCategoria);
    }

    //console.log('Método loadFromStorage');
  }

  private async loadFromStorageExtrato() {
    const storedWallet = (await this.storage.get(
      'carteiraExtrato'
    )) as extratoInterfaceNew[];
    if (storedWallet) {
      this.carteiraExtrato.push(...storedWallet);
    }
    console.log('Método loadFromStorage');
  }

  private saveAtStorage() {
    this.storage.set('carteiraAcoes', this.carteiraAcoes);
    this.storage.set('categorias', this.categorias);
    console.log('Método saveAtStorage');
  }

  //  adicionarCategoria (categoria: categoriainterface) {
  adicionarCategoria(name: string, type: string) {
    this.categorias.push({
      name: name,
      type: type,
    });
    console.log(this.categorias);
  }

  // adicionarAcao(acao: sharesToBuyInterfaceNew, quantidadeComprada: number) {
  // }

  private saveAtStorageExtrato() {
    this.storage.set('carteiraExtrato', this.carteiraExtrato);
  }

  public saveAtStorageSaldoExtrato() {
    this.storage.set('saldoExtrato', this.saldoExtrato);
  }

  async adicionarAcao(acao: labdoStock, quantidadeComprada: number) {
    await this.syncStockValue(acao.cd_acao);

    this.carteiraAcoes.push({
      symbol: acao.cd_acao,
      description: acao.nm_empresa,
      quantity: quantidadeComprada,
      actualValue: 50,
      syncDate: new Date().toISOString(),
    });

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
      }
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
  }
  async adicionarExtrato(
    nomeExtrato: string,
    valorExtrato: number,
    type: boolean
  ) {
    if (type) {
      //extrato POSITIVO

      this.carteiraExtrato.push({
        description: nomeExtrato,
        value: valorExtrato,
        type: type,
      });
    } else {
      this.carteiraExtrato.push({
        description: nomeExtrato,
        value: valorExtrato,
        type: type,
      });
    }

    this.saveAtStorageExtrato();
  }

  getAcoesCarteira() {
    return this.carteiraAcoes;
  }

  getCarteiraExtrato() {
    return this.carteiraExtrato;
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

  deletarCategoria(categoria: categoriaInterface) {
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
        this.carteiraAcoes[index].actualValue.valueOf() *
          this.carteiraAcoes[index].quantity.valueOf();
    }
  }

  atualizarAcao(acao: walletInterfaceNew, novoValor: number) {
    const indexAtualizar = this.carteiraAcoes.findIndex(
      (index: walletInterfaceNew) => {
        return index.symbol === acao.symbol;
      }
    );
    if (indexAtualizar != -1) {
      acao.quantity = novoValor;
    }
    this.saveAtStorage();
    this.getTotalValue();
  }

  public async syncStockValue(cd_acao: string) {
    this.labdoLastQuotedValue = await this.stockService.syncStockValues(
      cd_acao
    );
  }

  public async loadLabdoStock() {
    this.labdoStock = await this.stockService.loadLabdoStock();
    this.storage.set('labdoStock', this.labdoStock);
  }

  public async syncAllStockValue() {
    for (let index = 0; index < this.carteiraAcoes.length; index++) {
      await this.syncStockValue(this.carteiraAcoes[index].symbol);
      console.log(this.labdoLastQuotedValue[0]);
      console.log(this.labdoLastQuotedValue[0].vl_fechamento);
      this.carteiraAcoes[index].actualValue =
        this.labdoLastQuotedValue[0].vl_fechamento;
      this.carteiraAcoes[index].syncDate = new Date().toISOString();
    }
    this.saveAtStorage();
    this.getTotalValue();
  }
}
