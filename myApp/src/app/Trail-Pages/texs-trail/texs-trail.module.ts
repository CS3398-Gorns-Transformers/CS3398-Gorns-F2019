import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TexsTrailPage } from './texs-trail.page';

const routes: Routes = [
  {
    path: '',
    component: TexsTrailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TexsTrailPage]
})
export class TexsTrailPageModule {}
