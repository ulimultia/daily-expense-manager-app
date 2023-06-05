import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-history-header',
  templateUrl: './transaction-history-header.component.html',
  styleUrls: ['./transaction-history-header.component.css']
})
export class TransactionHistoryHeaderComponent {
  @Input() balance: number = 0;
  private _transactionDate: Date = new Date();
  date: string = "28";
  day: string = "Monday";
  monthYear: string = "May 2023";

  @Input()
  set transactionDate(value: any){
    this._transactionDate = new Date(value)
    this.date = this._transactionDate.getDate() > 9 ? this._transactionDate.getDate().toString() : "0"+this._transactionDate.getDate().toString()
    this.day = this._transactionDate.toLocaleString('en-us', {  weekday: 'long' })
    this.monthYear = this._transactionDate.toLocaleString('en-us', {  month: 'long' }) + " " + this._transactionDate.getFullYear()
  }
}
