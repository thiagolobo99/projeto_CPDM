import { Component } from '@angular/core';

interface Transaction {
  date: Date;
  amount: number;
  typeDesp: string;
  receitaDespesa: string;
}

@Component({
  selector: 'app-add-acoes',
  templateUrl: './add-transacao.page.html',
  styleUrls: ['./add-transacao.page.scss'],
})
export class AddTransacaoPage  {
  public selectedValueReceitaDespesa= '';
  public counter = 0;
  public selectedValue = 0;
  public selectedValueDesp ='';
  public transactionsFix: Transaction[] = [];
  public transactionsVar: Transaction[] = [];
  public selectedValueDespDesc = '';
  counterDesp: string;
  counterRecDesp: string;

  public addDespesa() {
    if(this.selectedValue != 0){
      if(this.selectedValueDespDesc == 'fix'){
        this.counter += this.selectedValue;
        this.counterDesp += this.selectedValueDesp;
        this.counterRecDesp += this.selectedValueReceitaDespesa;
        this.transactionsFix.unshift({
        typeDesp: this.selectedValueDesp,
        amount: this.selectedValue,
        receitaDespesa: this.selectedValueReceitaDespesa,
        date: new Date(),
      });
      }

      else if(this.selectedValueDespDesc == 'var'){
        this.counter += this.selectedValue;
        this.counterDesp += this.selectedValueDesp;
        this.transactionsVar.unshift({
        typeDesp: this.selectedValueDesp,
        amount: this.selectedValue,
        receitaDespesa: this.selectedValueReceitaDespesa,
        date: new Date(),
      });

    }
  } else {
    alert("valor zerado")
  }
}

  public BotaoAdd(){
    this.addDespesa()
    console.log(this.selectedValueReceitaDespesa)
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
