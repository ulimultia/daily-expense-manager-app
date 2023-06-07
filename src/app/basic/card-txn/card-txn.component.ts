import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-txn',
  templateUrl: './card-txn.component.html',
  styleUrls: ['./card-txn.component.css'],
})
export class CardTxnComponent {
  @Input()
  txn : any = {
    category : '',
    type: '',
    date: new Date(),
    nominal: 0
  }

  constructor() {
  }


}
