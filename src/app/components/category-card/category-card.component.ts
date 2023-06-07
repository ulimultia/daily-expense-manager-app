import { Component, OnInit } from '@angular/core';
import { categoryDict } from 'src/app/models/Transaction';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  expense: string[] = []
  income: string[] = []
  currentCategory: string = "";

  ngOnInit(): void {
    this.expense = [...categoryDict.expense]
    this.income = [...categoryDict.income]
  }

  selectCategory(category: string){
    this.currentCategory = category
  }
}
