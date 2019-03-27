import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import { NavComponent } from './nav/nav.component';*/

const routes: Routes = [];
  // { path: '/:id', component: NavComponent}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
