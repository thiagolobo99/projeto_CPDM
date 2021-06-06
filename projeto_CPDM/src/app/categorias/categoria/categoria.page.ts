import {DatabaseService, categoriainterface} from './../../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
private categorias: categoriainterface[] = [];
public selectedTypeValue = null;
public selectedNameValue = null;
constructor(
    public database: DatabaseService
  ) { }

  ngOnInit() {

    this.categorias = this.database.categorias;
    console.log(this.categorias);
  }

  public adicionarCategoria(nome: string, tipo: string)
  {
    console.log(nome);
    console.log(tipo);

  }


}
