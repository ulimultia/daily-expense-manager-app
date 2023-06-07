import { Component } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Category, Transaction, categoryDict } from 'src/app/models/Transaction';
import { MatDialog } from '@angular/material/dialog';
import { CategoryCardComponent } from '../../category-card/category-card.component';


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  amount: number = 0
  description: string = ""
  date: Date = new Date()
  category: Category = "Food & Beverage";

  constructor(private transactionService: TransactionService,public dialog: MatDialog){}

  onCreateTransaction(){
    if(categoryDict.expense.indexOf(this.category) > -1){
      this.amount *= -1
    }

    const transaction: Transaction = {
      "date": this.date,
      "category": this.category,
      "amount": +this.amount,
      "description": this.description,
    }
    this.transactionService.createTransaction(transaction,"lisa@gmail",this.date)
  }

  openDialog() {
    const dialogRef = this.dialog.open(CategoryCardComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.category = result
    });
  }
} 
