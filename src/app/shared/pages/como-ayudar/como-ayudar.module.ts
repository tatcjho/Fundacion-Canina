import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoAyudarPageRoutingModule } from './como-ayudar-routing.module';

import { ComoAyudarPage } from './como-ayudar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoAyudarPageRoutingModule
  ],
  declarations: [ComoAyudarPage]
})
export class ComoAyudarPageModule {}
