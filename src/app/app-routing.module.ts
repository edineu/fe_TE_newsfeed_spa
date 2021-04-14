import { TopheaderComponent } from './topheader/topheader.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: TopheaderComponent }
];

@NgModule({
  imports:
    [
      CommonModule,
      RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
