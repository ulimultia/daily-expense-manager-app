import { Component, EventEmitter, Output } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { TransactionFormComponent } from '../transaction/transaction-form/transaction-form.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() menuClickEvent = new EventEmitter()

  menuClick(){
    this.menuClickEvent.emit()
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(TransactionFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
