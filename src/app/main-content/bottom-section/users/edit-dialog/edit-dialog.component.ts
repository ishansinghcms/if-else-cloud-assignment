import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent {
  @Input() name: string;
  @Output() confirmed: EventEmitter<boolean>;

  confirmEdit(isConfirmed: boolean) {
    this.confirmed.emit(isConfirmed);
  }
  constructor() {
    this.name = '';
    this.confirmed = new EventEmitter();
  }
}
