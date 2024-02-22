import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F006Component } from './f006/f006.component';
import { F007Component } from './f007/f007.component';
import { F008Component } from './f008/f008.component';

const routes: Routes = [
  { path: 'f006', component: F006Component },
  { path: 'f007', component: F007Component },
  { path: 'f008', component: F008Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
