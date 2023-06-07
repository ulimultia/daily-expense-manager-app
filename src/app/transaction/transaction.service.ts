import { Injectable } from '@angular/core';
import { AuthService } from '../pages/auth/auth.service';
import { loadTxn } from '../model/loadTxn';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  user : any;
  loadTxn : any;
  recentTxn : any;
  txnThisMonth : any;

  constructor(public authService: AuthService) {
    Object.assign(this, {loadTxn});
    this.authService.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        };
        console.log("dashboard:  ", this.user);
      }
    });
  }

  ngOnInit(): void {


  }

  getRecentTxn() : any{
    let counter = 0;
    const sorted = loadTxn.sort((a: any, b: any) =>
    b.date.localeCompare(a.date, undefined, {numeric: true, sensitivity: 'base'}));
    this.recentTxn = []
    for(let temp of sorted){
      if(counter < 4){
        this.recentTxn
        .push({
          category : temp.category,
          type: temp.type,
          date: new Date(temp.date),
          nominal: temp.nominal
        })
      }
      else {
        break;
      }
      counter++;
    }
    return this.recentTxn;
  }

  getTxnThisMonth() : any{
    const thisMonth = (new Date()).getMonth() + 1;
    const thisYear = (new Date).getFullYear();
    this.txnThisMonth = [];
    for(let temp of loadTxn){
      const tempTxnMonth = new Date(temp.date).getMonth() + 1;
      const tempTxnYear = new Date(temp.date).getFullYear();
      if( tempTxnMonth === thisMonth && tempTxnYear == thisYear){
        this.txnThisMonth
        .push({
          category : temp.category,
          type: temp.type,
          date: new Date(temp.date),
          nominal: temp.nominal
        })
      }
    }
    return this.txnThisMonth;
  }

  countBalance () {
    let counterBalance = 0;
    for (let txn of loadTxn){
      if(txn.type === 'expense'){
        counterBalance = counterBalance - txn.nominal;
      }
      else {
        counterBalance = counterBalance + txn.nominal;
      }
    }
    return counterBalance;
  }
}
