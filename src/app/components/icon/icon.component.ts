import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/Transaction';

const icons = {
  'Transportation': '../../../assets/icons/ic_category_transport.png',
  'Food & Beverage': '../../../assets/icons/ic_category_foodndrink.png',
  'Rentals': '../../../assets/icons/ic_category_rentals.png',
  'Other Expense': '../../../assets/icons/ic_category_other_expense.png',
  'Salary': '../../../assets/icons/ic_category_salary.png',
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  imageSource: string = "";

  private _icon : string = "Other Expense";

  @Input() width: number = 50;
  @Input() height: number = 50;

  @Input()
  get icon(): string{
    return this._icon
  }
  set icon(value: string){
    this._icon = value
    this.imageSource = icons[value as Category]
  }
  
}
