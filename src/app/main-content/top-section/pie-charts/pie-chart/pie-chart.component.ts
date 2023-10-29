import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PieChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.createHalfDonut();
  }

  createHalfDonut() {
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select('#half-donut')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height})`); // Move center down

    const color = '#7958d2'; // Color for the 75% fill

    const data = [75, 25]; // 75% filled, 25% empty

    const pie = d3
      .pie()
      .value((d: any) => d)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    const arc = d3
      .arc()
      .innerRadius(radius - 20)
      .outerRadius(radius)
      .cornerRadius(10); // Add a corner radius to round the end

    const arcs = g
      .selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs
      .append('path')
      .attr('d', arc as any) // 'arc' type issue workaround
      .attr('fill', (d, i) => (i === 0 ? color : 'none')); // Fill only the first slice

    arcs
      .append('text')
      .attr('transform', (d: any) => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .text('');
  }
}
