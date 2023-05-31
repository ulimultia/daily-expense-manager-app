import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-in-out',
  templateUrl: './chart-in-out.component.html',
  styleUrls: ['./chart-in-out.component.css']
})
export class ChartInOutComponent implements OnInit{
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

  expense = 0;
  income = 0;

  constructor() {}
  ngOnInit(): void {
    this.expense = this.countExpense(this.loadTxn);
    this.income = this.countIncome(this.loadTxn);
  }

  countIncome (listTxn : any) {
    let counter = 0;
    for (this.txn of listTxn){
      if(this.txn.type === 'income'){
        counter = counter + this.txn.nominal;
      }
    }
    return counter;
  }

  countExpense (listTxn : any) {
    let counter = 0;
    for (this.txn of listTxn){
      if(this.txn.type === 'expense'){
        counter = counter + this.txn.nominal;
      }
    }
    return counter;
  }

  barCharts = {
    animationEnabled: true,
    title : {text: "test"},
    data: [
      {
        type : 'column',
        dataPoints: [
          { label: 'Income', y: this.income},
          { label: 'Expense', y: this.expense}
        ]
      }
    ]
  }

}
