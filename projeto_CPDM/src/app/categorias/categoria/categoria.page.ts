import {DatabaseService, categoriaInterface} from './../../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
public categorias: categoriaInterface[] = [];
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
    this.database.adicionarCategoria(nome, tipo);
  }

  public deletarCategoria(categoria:categoriaInterface)
  {
    //console.log(categoria);

    this.database.deletarCategoria(categoria);


  }


}
