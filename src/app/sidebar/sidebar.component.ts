import { Component, OnInit } from '@angular/core';
import {
  faCircle,
  faHome,
  faChartBar,
  faStickyNote,
  faChartPie,
  faUser,
  faCog,
  faDotCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  faCircle: any;
  faHome: any;
  faChartBar: any;
  faServicestack: any;
  faStickyNote: any;
  faChartPie: any;
  faUser: any;
  faDotCircle: any;
  faCog: any;

  constructor() {
    this.faCircle = faCircle;
    this.faHome = faHome;
    this.faChartBar = faChartBar;
    this.faServicestack = faServicestack;
    this.faStickyNote = faStickyNote;
    this.faChartPie = faChartPie;
    this.faUser = faUser;
    this.faDotCircle = faDotCircle;
    this.faCog = faCog;
  }

  ngOnInit(): void {}
}
