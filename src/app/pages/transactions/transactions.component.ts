import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/Transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  inflow: number = 0;
  outflow: number = 0;
  totalBalance: number = 0;
  showTransactions: any;
  user: any = null;
  isLoading: boolean = false;

  private transactions: Transaction[] = []
  
  constructor(private transactionService: TransactionService){}

  ngOnInit(): void {
    this.isLoading = true
    this.transactionService.getUser("lisa@gmail").valueChanges()
    .subscribe((data) => {
      if(data != null){
        this.user = {...data} 
        this.transactionService.user = {...data}
        this.getUserTransaction()  
        this.filterTransaction()
      }
      this.isLoading = false
    });
  }

  getUserTransaction(){
    if(this.user != null){
      this.transactions = []
      for (let index = 0; index < this.user.transactions.length; index++) {
        const element = this.user.transactions[index];
        this.transactions = [...this.transactions,({...element,'date': new Date(element.date)})]
      }
    }
  }

  filterTransaction(): void{
     //filter to show transactions
    this.transactions = this.transactions.sort(
      (objA, objB) => objA.date.getTime() - objB.date.getTime(),
    )
    var temp: any = {};
    var tempDate = new Date(0,0,0,0)
    this.inflow = 0
    this.outflow = 0
    this.totalBalance = 0
    this.transactions.forEach(transaction => {
      if(transaction.date.toDateString() != tempDate.toDateString()){
        tempDate = transaction.date
        temp = {...temp, 
          [transaction.date.toDateString()]: {
            'balance': +transaction.amount,
            'transactions': [{
              'category': transaction.category,
              'description': transaction.description,
              'amount': transaction.amount
            }]
          }
        }
      }else{
        temp = {...temp,
          [transaction.date.toDateString()]: {
            'balance': +temp[transaction.date.toDateString()].balance + +transaction.amount,
            'transactions': [...temp[transaction.date.toDateString()].transactions, {
                'category': transaction.category,
                'description': transaction.description,
                'amount': transaction.amount
              }
            ]
          }
        }
      }
      
      if(transaction.amount > 0){
        this.inflow += +transaction.amount
      }else{
        this.outflow += +transaction.amount
      }
      this.totalBalance = this.inflow + this.outflow
    });
    this.showTransactions = {...temp}
  }

  getData(key: any, data: string): any{
    return this.showTransactions[key][data]
  }
}

