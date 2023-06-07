import { Component } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Transaction } from 'src/app/models/Transaction';


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  amount: number = 0
  description: string = ""
  date: Date = new Date()

  constructor(private transactionService: TransactionService){}

  onCreateTransaction(){
    const transaction: Transaction = {
      "date": this.date,
      "category": "Food & Beverage",
      "amount": this.amount,
      "description": this.description,
    }
    this.transactionService.createTransaction(transaction,"lisa@gmail",this.date)
  }
} 
