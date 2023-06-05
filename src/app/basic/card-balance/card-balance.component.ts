import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-balance',
  templateUrl: './card-balance.component.html',
  styleUrls: ['./card-balance.component.css']
})
export class CardBalanceComponent implements OnInit{
  loadTxn = [
      {
        category: 'Salary',
        type : 'income',
        date : '25 January 2023',
        nominal : 10000000
      },
      {
        category: 'Rental',
        type : 'expense',
        date : '30 January 2023',
        nominal : 2000000
      },
      {
        category: 'Pets',
        type : 'expense',
        date : '26 January 2023',
        nominal : 800000
      },
      {
        category: 'Internet Bill',
        type : 'expense',
        date : '31 January 2023',
        nominal : 350000
      },
  ]
  txn : any = {
    category : '',
    type: '',
    date: Date,
    nominal: 0
  }
  userBalance = 0;

  constructor(){}

  ngOnInit(): void {
    this.userBalance =  this.countBalance(this.loadTxn);
  }

  countBalance (listTran: any) {
    let counterBalance = 0;
    for (this.txn of listTran){
      if(this.txn.type === 'expense'){
        this.txn.nominal = (-1) * this.txn.nominal;
      }
      counterBalance = counterBalance + this.txn.nominal;
    }

    return counterBalance;
  }
}
