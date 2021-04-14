import { TopheaderComponent } from './topheader/topheader.component';
import { HealthComponent } from './health/health.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: TopheaderComponent }, // home
  { path: 'health', component: HealthComponent } // health
];

@NgModule({
  imports:
    [
      CommonModule,
      RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
