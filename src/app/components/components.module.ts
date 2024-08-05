import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts'; 
import { BaseChartDirective, } from 'ng2-charts';


@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
  ],
  exports:[
    IncrementadorComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    BaseChartDirective
  ],
  providers: [
    // provideClientHydration(),
    provideCharts(withDefaultRegisterables())
  ]
})
export class ComponentsModule { }
