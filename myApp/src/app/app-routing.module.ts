import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  { path: 'modal-page', loadChildren: './modal-page/modal-page.module#ModalPagePageModule' },
  { path: 'barton-creek', loadChildren: './Trail-Pages/barton-creek/barton-creek.module#BartonCreekPageModule' },
  { path: 'river-place-nature-trail', loadChildren: './Trail-Pages/river-place-nature-trail/river-place-nature-trail.module#RiverPlaceNatureTrailPageModule' },
  { path: 'turkey-creek-trail', loadChildren: './Trail-Pages/turkey-creek-trail/turkey-creek-trail.module#TurkeyCreekTrailPageModule' },
  { path: 'st-edwards-park', loadChildren: './Trail-Pages/st-edwards-park/st-edwards-park.module#StEdwardsParkPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
