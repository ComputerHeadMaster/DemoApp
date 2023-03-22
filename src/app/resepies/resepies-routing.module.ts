import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResepiesPage } from './resepies.page';

const routes: Routes = [
  {
    path: '',
    component: ResepiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResepiesPageRoutingModule {}
