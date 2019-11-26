import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BartonCreekPage } from './barton-creek.page';

const routes: Routes = [
  {
    path: '',
    component: BartonCreekPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BartonCreekPage]
})
export class BartonCreekPageModule {}
