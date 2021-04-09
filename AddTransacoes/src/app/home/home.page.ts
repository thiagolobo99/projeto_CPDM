import { Component } from '@angular/core';

interface Transaction {
  date: Date;
  amount: number;
  typeDesp: string
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public counter = 0;
  public selectedValue = 0;
  public selectedValueDesp ='';
  public transactions: Transaction[] = [];
  counterDesp: string;

  public addDespesa() {
    this.counter += this.selectedValue;
    this.counterDesp += this.selectedValueDesp;
    this.transactions.unshift({
      typeDesp: this.selectedValueDesp,
      amount: this.selectedValue,
      date: new Date(),
    });
    this.selectedValue = 0;
  }

  public BotaoAdd(){
    this.addDespesa()
    console.log(this.selectedValueDesp)
  }

  public BotaoCancel(){

    console.log("FUNCIONOU")
  }


}


