import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';

import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
 
import { BaseChartDirective, } from 'ng2-charts';

import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,    
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    // provideClientHydration(),
    provideCharts(withDefaultRegisterables())
  ]
})
export class PagesModule { }
