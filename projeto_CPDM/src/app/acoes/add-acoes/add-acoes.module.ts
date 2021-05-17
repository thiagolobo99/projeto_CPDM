import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAcoesPageRoutingModule } from './add-acoes-routing.module';

import { AddAcoesPage } from './add-acoes.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAcoesPageRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [AddAcoesPage],
})
export class AddAcoesPageModule {}
