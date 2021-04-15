import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { TopheaderComponent } from './topheader/topheader.component';

import { NewsapiservicesService } from './service/newsapiservices.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HealthComponent } from './health/health.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ChartModule,
    PanelModule,
    CardModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TopheaderComponent,
    FooterComponent,
    HealthComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
