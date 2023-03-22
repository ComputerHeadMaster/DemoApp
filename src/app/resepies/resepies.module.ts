import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResepiesPageRoutingModule } from './resepies-routing.module';

import { ResepiesPage } from './resepies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResepiesPageRoutingModule
  ],
  declarations: [ResepiesPage]
})
export class ResepiesPageModule {}
