import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonacionesTotalPage } from './donaciones-total.page';

const routes: Routes = [
  {
    path: '',
    component: DonacionesTotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonacionesTotalPageRoutingModule {}
