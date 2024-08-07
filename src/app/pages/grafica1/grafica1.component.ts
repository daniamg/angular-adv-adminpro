import { Component } from '@angular/core';

// import { ChartHostComponent } from '../chart-host/chart-host.component';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``, 
})

export class Grafica1Component {

  labels1: string[] = ['Dania','Debie','Kira',];
  data1 = [[350, 450, 100]]
  // labels2: string[] = ['Marco','Angel','Mateo',];
  // data2 = [{data:[150, 250, 200]}]
}
