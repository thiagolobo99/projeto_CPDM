import { Injectable } from '@angular/core';


// tslint:disable-next-line: class-name
export interface walletInterfaceNew{
  symbol: string;
  description: string;
  quantity: number;
  actualValue: number;
  syncDate: string;
}
// tslint:disable-next-line: class-name
export interface sharesToBuyInterfaceNew{
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
  providedIn: 'root'
})

export class DatabaseService {
  carteiraAcoes: walletInterfaceNew[] = [];
  acoesDisponiveis: sharesToBuyInterfaceNew[] = [];
  public totalValueWallet: number = 0;

  constructor() {
    this.loadValues();

   }

  adicionarAcao(acao: sharesToBuyInterfaceNew, quantidadeComprada: number){
    this.carteiraAcoes.push({
      symbol:       acao.symbol,
      description:  acao.name,
      quantity:     quantidadeComprada, // colocar aqui a quantidade do input
      actualValue:  Math.floor(Math.random() * 30000.82), //colocar aqui o valor de acordo com o webservice
      syncDate:     new Date().toISOString()
    });
    this.getTotalValue();
  }
  public loadValues(){
    this.acoesDisponiveis = [];
    this.acoesDisponiveis.push(
      {symbol: 'MAGS', name: 'Magal Security Systems Ltd USA', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timeZone: 'UTC-04', currency: 'USD', matchScore: 0.7500},
      {symbol: 'MGLUY', name: 'Magazine Luiza SA', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timeZone: 'UTC-04', currency: 'USD', matchScore: 0.4444},
      {symbol: 'MGLU3.SAO', name: 'Magazine Luiza S.A', type: 'Equity', region: 'Brazil/Sao Paolo', marketOpen: '10:00', marketClose: '17:30', timeZone: 'UTC-03', currency: 'BRL', matchScore: 0.3636},
      {symbol: '540650.BSE', name: 'Magadh Sugar & Energy Limited', type: 'Equity', region: 'India/Bombay', marketOpen: '09:15', marketClose: '15:30', timeZone: 'UTC+5.5', currency: 'INR', matchScore: 0.2424},
      {symbol: 'PETRY', name: 'Petrobras Distribuidora S.A.', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timeZone: 'UTC-04', currency: 'USD', matchScore: 0.8000},
      {symbol: 'PTR', name: 'PetroChina Co. Ltd', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timeZone: 'UTC-04', currency: 'USD', matchScore: 0.7500},
      {symbol: 'PZE', name: 'Petrobras Argentina SA', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timeZone: 'UTC-04', currency: 'USD', matchScore: 0.5000},
      {symbol: 'PEFGF', name: 'Petrobras Energ  Ord', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timeZone: 'UTC-04', currency: 'USD', matchScore: 0.4000},
      {symbol: 'PTIFF', name: 'Petroceltic Intl Ord', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timeZone: 'UTC-04', currency: 'USD', matchScore: 0.4000},
      {symbol: '601857.SHH', name: 'PetroChina Company Ltd', type: 'Equity', region: 'Shanghai', marketOpen: '09:30', marketClose: '15:00', timeZone: 'UTC+08', currency: 'CNY', matchScore: 0.3704},
      {symbol: 'PC6A.FRK', name: 'PetroChina Company Limited', type: 'Equity', region: 'Frankfurt', marketOpen: '08:00', marketClose: '20:00', timeZone: 'UTC+02', currency: 'EUR', matchScore: 0.3226},
      {symbol: 'PC6.FRK', name: 'PetroChina Company Limited', type: 'Equity', region: 'Frankfurt', marketOpen: '08:00', marketClose: '20:00', timeZone: 'UTC+02', currency: 'EUR', matchScore: 0.3226},
      {symbol: 'BRDT3.SAO', name: 'Petrobras Distribuidora S.A', type: 'Equity', region: 'Brazil/Sao Paolo', marketOpen: '10:00', marketClose: '17:30', timeZone: 'UTC-03', currency: 'BRL', matchScore: 0.3125},
      {symbol: 'PCCYF', name: 'PetroChina Co. Ltd - Class H', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timeZone: 'UTC-04', currency: 'USD', matchScore: 0.3030}
    );
  }

  getAcoesCarteira(){
    return this.carteiraAcoes;
  }

  deletarAcao(acao: walletInterfaceNew){
    const indexApagar = this.carteiraAcoes.findIndex((index: walletInterfaceNew) => {
      return (index.symbol === acao.symbol);
    });
    if(indexApagar != -1){
      this.carteiraAcoes.splice(indexApagar,1);
    }
    this.getTotalValue();
  }

  getTotalValue(){
    this.totalValueWallet = 0;
    for (let index = 0; index < this.carteiraAcoes.length; index++) {
      this.totalValueWallet = this.totalValueWallet.valueOf() + this.carteiraAcoes[index].actualValue.valueOf();
    }
  }

  atualizarAcao(acao:walletInterfaceNew, novoValor: number)
  {
    const indexAtualizar = this.carteiraAcoes.findIndex((index: walletInterfaceNew) => {
      return (index.symbol === acao.symbol);
    });
    if(indexAtualizar != -1){
      acao.quantity = novoValor;
    }
    this.getTotalValue();
  }
}
