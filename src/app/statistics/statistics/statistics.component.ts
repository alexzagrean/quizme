import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public pieChartLabels: string[] = ['0-40', '40-70', '70-100'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string = 'pie';

  // events
  public pieColors: Array<any> = [
    { // all colors in order
      backgroundColor: ['#FF5252','#FBAE21','#76C04B']
    }
  ]

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false
  };
  public barChartLabels: string[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Number of correct answers per question' }
  ];
  public chartColors: Array<any> = [
    { // all colors in order
      backgroundColor: ['#FBAE21', '#FBAE21', '#FBAE21', '#FBAE21', '#FBAE21', '#FBAE21', '#FBAE21']
    }
  ]
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
