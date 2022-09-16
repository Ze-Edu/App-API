import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarEventoPageRoutingModule } from './mostrar-evento-routing.module';

import { MostrarEventoPage } from './mostrar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarEventoPageRoutingModule
  ],
  declarations: [MostrarEventoPage]
})
export class MostrarEventoPageModule {}
