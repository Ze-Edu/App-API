import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEventoPage } from './add-evento.page';

const routes: Routes = [
  {
    path: '',
    component: AddEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEventoPageRoutingModule {}
