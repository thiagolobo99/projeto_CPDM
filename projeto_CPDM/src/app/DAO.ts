import { Injectable } from '@angular/core';


export interface wallet {
  symbol: String;
  description: String;
  quantity: Number;
  actualValue: Number;
  syncDate: String;
}




@Injectable()
export class Globals {

<<<<<<< HEAD



  stockPortfolio: wallet[] = [
    //carteiraComprada: wallet[] = [
=======
  stockPortfolio: wallet[] = [
>>>>>>> main
    { symbol: "PETR3", description: "Petroleo Brasileiro SA Petrobras", quantity: 500, actualValue: 10150.25, syncDate: new Date().toISOString()},
    { symbol: "SHOW3", description: "Time For Fun", quantity: 200, actualValue: 6000, syncDate: Date.now().toString()},
    { symbol: "MXRF11", description: "Maxi Renda Fundo de Investimento Imobiliario - FII", quantity: 300, actualValue: 3110.50, syncDate: Date.now().toString()},
    { symbol: "BRML3", description: "brMalls", quantity: 100, actualValue: 980, syncDate: Date.now().toString()},
    { symbol: "GGBR4", description: "Gerdau", quantity: 200, actualValue: 3122.00, syncDate: Date.now().toString()},
    ];

<<<<<<< HEAD
  //role: string = 'test';

=======
>>>>>>> main
    public updateWallet(updateWallet:wallet){


    }
    public deleteWallet(updateWallet:wallet){


    }


}
