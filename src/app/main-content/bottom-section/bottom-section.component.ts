import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss'],
})
export class BottomSectionComponent implements OnInit {
  faEllipsisV: any;
  constructor() {
    this.faEllipsisV = faEllipsisV;
  }

  ngOnInit(): void {}
}
