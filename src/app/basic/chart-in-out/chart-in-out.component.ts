import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-in-out',
  templateUrl: './chart-in-out.component.html',
  styleUrls: ['./chart-in-out.component.css']
})
export class ChartInOutComponent implements OnInit{
  @Input()
  loadTxn : any;
  txn : any = {
    category : '',
    type: '',
    date: '',
    nominal: 0
  }

  dataChart : any = [];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = 'Rupiah (Rp)';

  colorScheme : any  = {
    domain: ['#84D2C5', '#B05A7A']
  };

  constructor() {
  }

  ngOnInit(): void {
    this.dataChart = [
      {
        name : "Income",
        value : this.countIncome(this.loadTxn),
      },
      {
        name : "Expense",
        value : this.countExpense(this.loadTxn),
      },
    ];

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

}
