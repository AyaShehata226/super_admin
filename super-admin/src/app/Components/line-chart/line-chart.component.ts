import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit {
  public chart: any;
  
  createChart(){
    this.chart = new Chart("MyLineChart", {
      type: 'line', //this denotes tha type of chart

      data: {
        labels: ['asd','asd'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
     
      
    });
  }
  ngOnInit(): void {
    this.createChart();
  }

}
