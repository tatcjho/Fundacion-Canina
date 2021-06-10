import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComoAyudarPage } from './como-ayudar.page';

const routes: Routes = [
  {
    path: '',
    component: ComoAyudarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComoAyudarPageRoutingModule {}
