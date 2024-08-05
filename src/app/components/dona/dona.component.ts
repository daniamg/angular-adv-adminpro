import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {

  @Input() title: string = "Holaaaaaaaa"
  @Input('labels1') labels1 : string[] = []
  @Input('data1') data1: any[] = []
  // @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter()


       // Doughnut
   public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      // { data: [50, 150, 120] ,backgroundColor:'#1428F7' },
      // { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';


  // public colors:Color[] = [
  //   { backgroundColor: ['#']}
  // ]
}
