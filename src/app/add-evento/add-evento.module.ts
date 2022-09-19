import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEventoPageRoutingModule } from './add-evento-routing.module';

import { AddEventoPage } from './add-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEventoPageRoutingModule
  ],
  declarations: [AddEventoPage]
})
export class AddEventoPageModule {}
