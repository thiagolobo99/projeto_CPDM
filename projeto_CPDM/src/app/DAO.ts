import { Inject, Injectable } from '@angular/core';


export interface walletInterface{
  symbol: String;
  description: String;
  quantity: Number;
  actualValue: Number;
  syncDate: String;
}

export interface sharesToBuyInterface{
  symbol: String;
  name: String;
  type: String;
  region: String;
  marketOpen: String; //colocar horário
  marketClose: String;
  timeZone: String;
  currency: String;
  matchScore: Number;
}

@Injectable({
  providedIn: 'root'
})

export class Globals {

  sharesToBuy: sharesToBuyInterface[] = [];
  stockPortfolio: walletInterface[] = [];

 // TODO colocar o constructor aqui

  constructor( ){


  }

  // private insWallet : walletInterface[];

  // sharesToBuy: sharesToBuyInterface[]=[
    // {symbol: "MAGS", name: "Magal Security Systems Ltd USA", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.7500},
    // {symbol: "MGLUY", name: "Magazine Luiza SA", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.4444},
    // {symbol: "MGLU3.SAO", name: "Magazine Luiza S.A", type: "Equity", region: "Brazil/Sao Paolo", marketOpen: "10:00", marketClose: "17:30", timeZone: "UTC-03", currency: "BRL", matchScore: 0.3636},
    // {symbol: "540650.BSE", name: "Magadh Sugar & Energy Limited", type: "Equity", region: "India/Bombay", marketOpen: "09:15", marketClose: "15:30", timeZone: "UTC+5.5", currency: "INR", matchScore: 0.2424},
    // {symbol: "PETRY", name: "Petrobras Distribuidora S.A.", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.8000},
    // {symbol: "PTR", name: "PetroChina Co. Ltd", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.7500},
    // {symbol: "PZE", name: "Petrobras Argentina SA", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.5000},
    // {symbol: "PEFGF", name: "Petrobras Energ  Ord", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.4000},
    // {symbol: "PTIFF", name: "Petroceltic Intl Ord", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.4000},
    // {symbol: "601857.SHH", name: "PetroChina Company Ltd", type: "Equity", region: "Shanghai", marketOpen: "09:30", marketClose: "15:00", timeZone: "UTC+08", currency: "CNY", matchScore: 0.3704},
    // {symbol: "PC6A.FRK", name: "PetroChina Company Limited", type: "Equity", region: "Frankfurt", marketOpen: "08:00", marketClose: "20:00", timeZone: "UTC+02", currency: "EUR", matchScore: 0.3226},
    // {symbol: "PC6.FRK", name: "PetroChina Company Limited", type: "Equity", region: "Frankfurt", marketOpen: "08:00", marketClose: "20:00", timeZone: "UTC+02", currency: "EUR", matchScore: 0.3226},
    // {symbol: "BRDT3.SAO", name: "Petrobras Distribuidora S.A", type: "Equity", region: "Brazil/Sao Paolo", marketOpen: "10:00", marketClose: "17:30", timeZone: "UTC-03", currency: "BRL", matchScore: 0.3125},
    // {symbol: "PCCYF", name: "PetroChina Co. Ltd - Class H", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.3030}
  // ];*/

  // stockPortfolio: walletInterface[] = [];
  /*stockPortfolio: walletInterface[]
   = [
    { symbol: "PETR3", description: "Petroleo Brasileiro SA Petrobras", quantity: 500, actualValue: 10150.25, syncDate: new Date().toISOString()},
    /*{ symbol: "SHOW3", description: "Time For Fun", quantity: 200, actualValue: 6000, syncDate: Date.now().toString()},
    { symbol: "MXRF11", description: "Maxi Renda Fundo de Investimento Imobiliario - FII", quantity: 300, actualValue: 3110.50, syncDate: Date.now().toString()},
    { symbol: "BRML3", description: "brMalls", quantity: 100, actualValue: 980, syncDate: Date.now().toString()},
    { symbol: "GGBR4", description: "Gerdau", quantity: 200, actualValue: 3122.00, syncDate: Date.now().toString()},];*/

  //role: string = 'test';

    public updateWallet(updateWallet:walletInterface){

      console.log("Método updateWallet");
      console.log(updateWallet);

    }

    public loadValues(){

      this.sharesToBuy.push(
      {symbol: "MAGS", name: "Magal Security Systems Ltd USA", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.7500},
      {symbol: "MGLUY", name: "Magazine Luiza SA", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.4444},
      {symbol: "MGLU3.SAO", name: "Magazine Luiza S.A", type: "Equity", region: "Brazil/Sao Paolo", marketOpen: "10:00", marketClose: "17:30", timeZone: "UTC-03", currency: "BRL", matchScore: 0.3636},
      {symbol: "540650.BSE", name: "Magadh Sugar & Energy Limited", type: "Equity", region: "India/Bombay", marketOpen: "09:15", marketClose: "15:30", timeZone: "UTC+5.5", currency: "INR", matchScore: 0.2424},
      {symbol: "PETRY", name: "Petrobras Distribuidora S.A.", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.8000},
      {symbol: "PTR", name: "PetroChina Co. Ltd", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.7500},
      {symbol: "PZE", name: "Petrobras Argentina SA", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.5000},
      {symbol: "PEFGF", name: "Petrobras Energ  Ord", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.4000},
      {symbol: "PTIFF", name: "Petroceltic Intl Ord", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.4000},
      {symbol: "601857.SHH", name: "PetroChina Company Ltd", type: "Equity", region: "Shanghai", marketOpen: "09:30", marketClose: "15:00", timeZone: "UTC+08", currency: "CNY", matchScore: 0.3704},
      {symbol: "PC6A.FRK", name: "PetroChina Company Limited", type: "Equity", region: "Frankfurt", marketOpen: "08:00", marketClose: "20:00", timeZone: "UTC+02", currency: "EUR", matchScore: 0.3226},
      {symbol: "PC6.FRK", name: "PetroChina Company Limited", type: "Equity", region: "Frankfurt", marketOpen: "08:00", marketClose: "20:00", timeZone: "UTC+02", currency: "EUR", matchScore: 0.3226},
      {symbol: "BRDT3.SAO", name: "Petrobras Distribuidora S.A", type: "Equity", region: "Brazil/Sao Paolo", marketOpen: "10:00", marketClose: "17:30", timeZone: "UTC-03", currency: "BRL", matchScore: 0.3125},
      {symbol: "PCCYF", name: "PetroChina Co. Ltd - Class H", type: "Equity", region: "United States", marketOpen: "09:30", marketClose: "16:00", timeZone: "UTC-04", currency: "USD", matchScore: 0.3030});

      if(this.stockPortfolio.length === 0)
      {
        this.stockPortfolio.push(
        {symbol: "PETR3", description: "Petroleo Brasileiro SA Petrobras", quantity: 500, actualValue: 10150.25, syncDate: new Date().toISOString()},);
      }
    }

    public deleteWallet(updateWallet:walletInterface){


    }

    public insertWallet(insertWallet:sharesToBuyInterface){
      //console.log(insertWallet);

      this.stockPortfolio.push({
        symbol:       insertWallet.symbol,
        description:  insertWallet.name,
        quantity:     100,
        actualValue:  5000,
        syncDate:     new Date().toISOString()
      });
      //console.log(this.stockPortfolio);
      //Chamar aqui o método de captação do valor no webservice
    }
    public getStockPortfolio()
    {
      //console.log(this.stockPortfolio);
      return this.stockPortfolio;

    }



}
