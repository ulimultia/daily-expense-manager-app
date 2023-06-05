import { Component, Input } from '@angular/core';
import { Transaction } from '../../../models/Transaction';

@Component({
  selector: 'app-transaction-history-detail',
  templateUrl: './transaction-history-detail.component.html',
  styleUrls: ['./transaction-history-detail.component.css']
})
export class TransactionHistoryDetailComponent {
  @Input() transaction: Transaction = {
    category: "Transportation",
    amount: 0,
    description: "",
    date: new Date()
  };
}
