import { Component, OnInit } from '@angular/core';
import { faCube, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  faCube: any;
  faEllipsisV: any;

  constructor() {
    this.faCube = faCube;
    this.faEllipsisV = faEllipsisV;
  }

  ngOnInit() {}
}
