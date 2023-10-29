import { Component, OnInit } from '@angular/core';
import { faEllipsisV, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.scss'],
})
export class PieChartsComponent implements OnInit {
  i1 = faEllipsisV;
  i2 = faChartLine;
  constructor() {}

  ngOnInit(): void {}
}
