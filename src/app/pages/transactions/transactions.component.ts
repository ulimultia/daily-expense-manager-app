import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  @Input() inflow: number = 1000000;
  @Input() outflow: number = -500000;
  @Input() totalBalance: number = 500000;

}
