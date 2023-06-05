import { Component, Input } from '@angular/core';

export type Category = "Transportation" | "Food & Beverage" | "Rentals" | "Other Expense"

export type Transaction = {
  category: Category,
  amount: number,
  description: string,
  date: Date,
}

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {
  @Input() balance: number = 0;
  @Input() date: number = 28;
  @Input() day: string = "Monday";
  @Input() month: string = "May 2023";

  @Input() transactions: Transaction[] = [
    {
      'category': "Transportation",
      'amount': 500000,
      'description': 'this is a transport description',
      'date': new Date()
    },
    {
      'category': "Food & Beverage",
      'amount': -500000,
      'description': 'this is a food description',
      'date': new Date()
    }
  ]
}
