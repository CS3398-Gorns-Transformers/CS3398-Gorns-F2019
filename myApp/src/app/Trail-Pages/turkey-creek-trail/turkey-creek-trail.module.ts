import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TurkeyCreekTrailPage } from './turkey-creek-trail.page';

const routes: Routes = [
  {
    path: '',
    component: TurkeyCreekTrailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TurkeyCreekTrailPage]
})
export class TurkeyCreekTrailPageModule {}
