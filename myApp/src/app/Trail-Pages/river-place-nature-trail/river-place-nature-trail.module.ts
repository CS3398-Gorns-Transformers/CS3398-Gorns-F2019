import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RiverPlaceNatureTrailPage } from './river-place-nature-trail.page';

const routes: Routes = [
  {
    path: '',
    component: RiverPlaceNatureTrailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RiverPlaceNatureTrailPage]
})
export class RiverPlaceNatureTrailPageModule {}
