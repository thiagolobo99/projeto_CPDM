import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

interface Transaction {
  date: Date;
  amount: number;
  typeDesp: string;
}

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {
  constructor(public database: DatabaseService) {}

  ngOnInit() {}

  public extratoPositivo = true;
  public counter = 0;
  public selectedValue = 0;
  public selectedValueReceita = '';
  public transactionsFix: Transaction[] = [];
  public transactionsVar: Transaction[] = [];
  public selectedCategoria = '';
  counterDesp: string;

  public adicionarReceita() {
    if (this.selectedValue != 0) {
      if (this.selectedCategoria == 'fix') {
        this.counter += this.selectedValue;
        this.counterDesp += this.selectedValueReceita;
        this.transactionsFix.unshift({
          typeDesp: this.selectedValueReceita,
          amount: this.selectedValue,
          date: new Date(),
        });
      } else if (this.selectedCategoria == 'var') {
        this.counter += this.selectedValue;
        this.counterDesp += this.selectedValueReceita;
        this.transactionsVar.unshift({
          typeDesp: this.selectedValueReceita,
          amount: this.selectedValue,
          date: new Date(),
        });
      }

      this.database.adicionarExtrato(
        this.selectedValueReceita,
        this.selectedValue,
        this.extratoPositivo
      );
    } else {
      alert('valor zerado');
    }

    this.selectedValueReceita = '';
    this.selectedValue = 0;
    this.selectedCategoria = '';
  }

  public BotaoAdd() {
    this.adicionarReceita();
  }

  public BotaoCancel() {
    this.selectedValueReceita = '';
    this.selectedValue = 0;
    this.selectedCategoria = '';
  }

  public validaValor() {
    if (this.selectedValue == 0) {
      console.log('valor zerado');
      return false;
    } else {
      return true;
    }
  }
}
