import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart-background',
  templateUrl: './pie-chart-background.component.html',
  styleUrls: ['./pie-chart-background.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PieChartBackgroundComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.createHalfDonut();
  }

  createHalfDonut() {
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select('#half-donut-background')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height})`);

    const color = '#eaecf0';

    const data = [100];

    const pie = d3
      .pie()
      .value((d: any) => d)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    const arc = d3
      .arc()
      .innerRadius(radius - 20)
      .outerRadius(radius)
      .cornerRadius(10)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    const arcs = g
      .selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs
      .append('path')
      .attr('d', arc as any)
      .attr('fill', color);

    arcs
      .append('text')
      .attr('transform', (d: any) => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .text('');
  }
}
