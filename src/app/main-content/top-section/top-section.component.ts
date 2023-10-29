import { Component, OnInit } from '@angular/core';
import { faFileExport, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
})
export class TopSectionComponent implements OnInit {
  faFileExport: any;
  faEdit: any;
  faSearch: any;

  constructor() {
    this.faFileExport = faFileExport;
    this.faEdit = faEdit;
    this.faSearch = faSearch;
  }

  ngOnInit(): void {}
}
