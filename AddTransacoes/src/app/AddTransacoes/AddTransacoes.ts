import { Component } from '@angular/core';

interface Transaction {
  date: Date;
  amount: number;
  typeDesp: string
}
@Component({
  selector: 'app-home',
  templateUrl: 'AddTransacoes.html',
  styleUrls: ['AddTransacoes.scss'],
})
export class HomePage {

  public counter = 0;
  public selectedValue = 0;
  public selectedValueDesp ='';
  public transactionsFix: Transaction[] = [];
  public transactionsVar: Transaction[] = [];
  public selectedValueDespDesc = '';
  counterDesp: string;

  public addDespesa() {
    if(this.selectedValue != 0){
      if(this.selectedValueDespDesc == 'fix'){
        this.counter += this.selectedValue;
        this.counterDesp += this.selectedValueDesp;
        this.transactionsFix.unshift({
        typeDesp: this.selectedValueDesp,
        amount: this.selectedValue,
        date: new Date(),
      });
      }

      else if(this.selectedValueDespDesc == 'var'){
        this.counter += this.selectedValue;
        this.counterDesp += this.selectedValueDesp;
        this.transactionsVar.unshift({
        typeDesp: this.selectedValueDesp,
        amount: this.selectedValue,
        date: new Date(),
      });

    }
  } else {
    alert("valor zerado")
  }
}

  public BotaoAdd(){
    this.addDespesa()
  }


  public BotaoCancel(){
    this.selectedValueDesp = ''
    this.selectedValue = 0
    this.selectedValueDespDesc = ''
  }

  public validaValor(){
    if(this.selectedValue == 0){
      console.log('valor zerado')
      return false
    } else {
      return true
    }

  }

}


