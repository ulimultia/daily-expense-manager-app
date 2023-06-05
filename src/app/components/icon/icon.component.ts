import { Component, Input } from '@angular/core';
import { Category } from '../transaction-history/transaction-history.component';

const icons = {
  'Transportation': '../../../assets/icons/ic_category_transport.png',
  'Food & Beverage': '../../../assets/icons/ic_category_foodndrink.png',
  'Rentals': '../../../assets/icons/ic_category_rentals.png',
  'Other Expense': '../../../assets/icons/ic_category_other_expense.png',
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  imageSource: string = "";

  private _icon : Category = "Other Expense";

  @Input() width: number = 50;
  @Input() height: number = 50;

  @Input()
  get icon(): Category{
    return this._icon
  }
  set icon(value: Category){
    this._icon = value
    this.imageSource = icons[this._icon]
  }
  
}
