import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonacionesTotalPageRoutingModule } from './donaciones-total-routing.module';

import { DonacionesTotalPage } from './donaciones-total.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonacionesTotalPageRoutingModule
  ],
  declarations: [DonacionesTotalPage]
})
export class DonacionesTotalPageModule {}
