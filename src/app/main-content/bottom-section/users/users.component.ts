import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  faArrowDown,
  faQuestionCircle,
  faCircle,
  faTrash,
  faPen,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  faArrowDown: any;
  faQuestionCircle: any;
  faCircle: any;
  faTrash: any;
  faPen: any;
  faArrowLeft: any;
  faArrowRight: any;
  heading: String[] = [];
  grid_data: Array<{ [key: string]: any }> = [];
  data: any;

  //pagination
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;
  cPage: number;
  originalData: Array<{ [key: string]: any }>;
  totalPages: number;
  public pageButtons: any;

  //hovering effect
  hoveredRowIndex: number;
  hoveringRow(i: number) {
    if (i === this.hoveredRowIndex) return { 'background-color': '#f9fafb' };
    else return {};
  }

  //select all functionality
  public selectAll: boolean;
  public rowCheckboxes: boolean[] = new Array(this.grid_data.length).fill(
    false
  );

  toggleAllCheckboxes() {
    this.rowCheckboxes = new Array(this.grid_data.length).fill(this.selectAll);
  }

  updateSelectAll() {
    this.selectAll = this.rowCheckboxes.every((checked) => checked);
    console.log(this.rowCheckboxes);
  }

  isCurrentPage(page: number): boolean {
    return page === this.currentPage;
  }

  //page number styles
  baseStyle: any;
  currentPageStyle: any;

  getPageButtonsStyles(page: number): any {
    if (this.isCurrentPage(page)) return this.currentPageStyle;
    else return {};
  }

  combineStyles(page: number): any {
    return {
      ...this.baseStyle,
      ...this.getPageButtonsStyles(page),
    };
  }

  sliceData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.grid_data = this.originalData.slice(startIndex, endIndex);
    this.rowCheckboxes = new Array(this.grid_data.length).fill(false);
  }

  goToPage(pageNumber: number) {
    if (!this.isCurrentPage(pageNumber)) {
      this.rowCheckboxes = new Array(this.grid_data.length).fill(false);
      this.selectAll = false;
    }
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(this.totalItems / this.itemsPerPage)
    ) {
      this.currentPage = pageNumber;
      this.sliceData();
    }
  }

  previousPage() {
    this.goToPage(this.currentPage - 1);
    this.rowCheckboxes = new Array(this.grid_data.length).fill(false);
    this.selectAll = false;
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
    this.rowCheckboxes = new Array(this.grid_data.length).fill(false);
    this.selectAll = false;
  }

  getPages() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  //delete functionality
  showConfirmationDialog: boolean;
  deleteId: string;
  deleteUserName: string;
  deletedUser: { [key: string]: any } | undefined;
  editUser: { [key: string]: any } | undefined;

  handleDelete(id: string) {
    this.deleteId = id;
    this.deletedUser = this.originalData.find(
      (user) => user['id'] === this.deleteId
    );
    if (this.deletedUser) {
      this.deleteUserName =
        this.deletedUser['name']['first_name'] +
        ' ' +
        this.deletedUser['name']['last_name'];
    }
    this.openConfirmationDialog();
  }

  openConfirmationDialog() {
    this.showConfirmationDialog = true;
  }

  handleDeleteConfirmation(isConfirmed: boolean) {
    if (isConfirmed) {
      this.originalData = this.originalData.filter(
        (user) => user['id'] !== this.deleteId
      );
      this.totalItems = this.originalData.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.sliceData();
    }
    this.showConfirmationDialog = false;
  }

  //edit functionality
  showEditDialog: boolean;
  editUserName: string;
  editId: string;
  handleEdit(id: string) {
    this.editId = id;
    this.editUser = this.originalData.find(
      (user) => user['id'] === this.editId
    );
    if (this.editUser) {
      this.editUserName =
        this.editUser['name']['first_name'] +
        ' ' +
        this.editUser['name']['last_name'];
    }
    this.showEditDialog = true;
  }

  handleEditConfirmation(isConfirmed: boolean) {
    this.showEditDialog = false;
  }

  constructor(private http: HttpClient) {
    //icons
    this.faArrowDown = faArrowDown;
    this.faQuestionCircle = faQuestionCircle;
    this.faCircle = faCircle;
    this.faTrash = faTrash;
    this.faPen = faPen;
    this.faArrowLeft = faArrowLeft;
    this.faArrowRight = faArrowRight;

    //pagination
    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.totalItems = 0;
    this.cPage = 0;
    this.originalData = [];
    this.totalPages = 0;
    this.pageButtons = {
      border: '2px solid green',
      color: '#68717f',
      'background-color': 'transparent',
      padding: '10px 20px',
      transition: 'background-color 0.3s',
    };

    //hovering effect
    this.hoveredRowIndex = -1;

    //select all
    this.selectAll = false;

    //page number styles
    this.baseStyle = {
      padding: '10px 16px 10px 16px',
      margin: '0 5px 0 5px',
      color: '#636d7b',
      'background-color': '#ffffff',
      border: 'transparent',
      'font-size': '15px',
    };

    this.currentPageStyle = {
      'background-color': '#f9fafb',
      'border-radius': '7px',
    };

    //delete functionality
    this.showConfirmationDialog = false;
    this.deleteId = '';
    this.deleteUserName = '';
    this.deletedUser = undefined;
    this.editUser = undefined;

    //edit functionality
    this.showEditDialog = false;
    this.editUserName = '';
    this.editId = '';
  }

  ngOnInit(): void {
    this.http
      .get('https://1.api.fy23ey04.careers.ifelsecloud.com/')
      .subscribe((response) => {
        this.data = response;
        for (let i = 0; i < this.data['grid_columns'].length; ++i)
          this.heading[i] = this.data['grid_columns'][i]['column_name'];
        this.grid_data = this.data['grid_data'];
        //pagination
        this.originalData = this.grid_data;
        this.totalItems = this.originalData.length;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.sliceData();
      });
  }
}
