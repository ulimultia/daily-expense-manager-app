import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-balance',
  templateUrl: './card-balance.component.html',
  styleUrls: ['./card-balance.component.css']
})
export class CardBalanceComponent{
  @Input()
  userBalance = 0;

  constructor(){
  }
}
