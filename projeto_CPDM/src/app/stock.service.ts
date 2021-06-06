import {
  sharesToBuyInterfaceNew,
  GlobalQuote,
  labdoStock,
  labdoLastQuotedValue,
} from './database.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  // public searchActualStockValue(stock: string) {
  //   const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=P3R95GOQ5R34DKKB`;
  //   return this.http.get<GlobalQuote>(url).toPromise();
  // }

  public loadLabdoStock() {
    const url = `https://api-cotacao-b3.labdo.it/api/carteira`;
    return this.http.get<labdoStock>(url).toPromise();
  }

  public syncStockValues(cd_acao: string) {
    const url = `https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${cd_acao}`;
    return this.http.get<labdoLastQuotedValue>(url).toPromise();
  }
}
