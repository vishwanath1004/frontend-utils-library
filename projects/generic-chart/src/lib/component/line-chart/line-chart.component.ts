import { Component, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'lib-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  @Input() data: any;
  private chart: Chart | undefined;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.data) {
      this.initializeChart();
    }
  }

  ngOnChanges() {
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.data) {
      this.initializeChart();
    }
  }

  private initializeChart() {
    const chartElement = document.getElementById('line') as HTMLCanvasElement;
    if (chartElement) {
      this.chart = new Chart(chartElement, {
        type: 'line',
        data: this.data,
        options: {
          responsive: true,
          scales: {
            x: {},
            y: {
              beginAtZero: true
            }
          }
        }
      });
      this.cdr.detectChanges();
    }
  }
}
