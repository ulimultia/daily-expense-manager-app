import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  loadTxn = [
    {
      category: 'Salary',
      type : 'income',
      date : '25 January 2023',
      nominal : '10000000'
    },
    {
      category: 'Rental',
      type : 'expense',
      date : '30 January 2023',
      nominal : '2000000'
    }
  ]

  txn : any = {
    category : '',
    type: '',
    date: Date,
    nominal: 0
  }

  constructor() {}


}
