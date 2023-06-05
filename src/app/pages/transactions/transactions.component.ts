import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../models/Transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  inflow: number = 1000000;
  outflow: number = -500000;
  totalBalance: number = 500000;
  showTransactions: any;
  private transactions: Transaction[] = [
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
    },
    {
      'category': "Food & Beverage",
      'amount': -500000,
      'description': 'this is a food description',
      'date': new Date("2023-06-06")
    }
  ]
  

  ngOnInit(): void {
    this.filterTransaction()
  }

  filterTransaction(): void{
     //filter to show transactions
     this.transactions = this.transactions.sort(
      (objA, objB) => objA.date.getTime() - objB.date.getTime(),
    )
    var temp: any = {};
    var tempDate = new Date(0,0,0,0)
    this.transactions.forEach(transaction => {
      if(transaction.date.toDateString() != tempDate.toDateString()){
        tempDate = transaction.date
        temp = {...temp, 
          [transaction.date.toDateString()]: {
            'balance': transaction.amount,
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
            'balance': temp[transaction.date.toDateString()].balance + transaction.amount,
            'transactions': [...temp[transaction.date.toDateString()].transactions, {
                'category': transaction.category,
                'description': transaction.description,
                'amount': transaction.amount
              }
            ]
          }
        }
      }
    });
    this.showTransactions = {...temp}
  }

  getData(key: any, data: string): any{
    return this.showTransactions[key][data]
  }
}
