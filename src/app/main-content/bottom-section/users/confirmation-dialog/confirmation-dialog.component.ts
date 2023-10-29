import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  @Input() name: string;
  @Output() confirmed: EventEmitter<boolean>;

  confirmDelete(isConfirmed: boolean) {
    this.confirmed.emit(isConfirmed);
  }

  constructor() {
    this.name = '';
    this.confirmed = new EventEmitter();
  }
}
