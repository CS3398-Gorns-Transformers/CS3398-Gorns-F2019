import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StEdwardsParkPage } from './st-edwards-park.page';

const routes: Routes = [
  {
    path: '',
    component: StEdwardsParkPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StEdwardsParkPage]
})
export class StEdwardsParkPageModule {}
