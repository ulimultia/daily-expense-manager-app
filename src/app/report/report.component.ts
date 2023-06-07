import { TransactionsService } from './../transactions/transactions.service';
import { Component, Input } from '@angular/core';
import { categories } from '../model/category';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  txnThisMonth : any;
  pieColorIncome : any;
  pieColorExpense : any;
  listIncome : any = [];
  listExpense : any = [];

  constructor(private txnsService: TransactionsService) {
    Object.assign(this, {categories});
    this.txnThisMonth = this.txnsService.getTxnThisMonth();
    this.listIncome = this.getIncome();
    this.listExpense = this.getExpense();
  }

  getIncome() : any {
    for(let category of categories){
      let counterValue = 0;
      if(category.type === 'income'){
        for( let txn of this.txnThisMonth){
          if (category.name === txn.category) {
            counterValue = counterValue + txn.nominal
          }
        }
        this.listIncome.push(
          {
            name : category.name,
            value : counterValue
          }
        );
      }
    }
    return this.listIncome;
  }

  getExpense() : any {
    for(let category of categories){
      let counterValue = 0;
      if(category.type === 'expense'){
        for( let txn of this.txnThisMonth){
          if (category.name === txn.category) {
            counterValue = counterValue + txn.nominal
          }
        }
        this.listExpense.push(
          {
            name : category.name,
            value : counterValue
          }
        );
      }
    }
    return this.listExpense;
  }

  getPieColorIncome(){
    this.pieColorIncome = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
  }

  getPieColorExpense(){
    this.pieColorExpense = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
  }

}
