import { Injectable } from '@angular/core';
import { Transaction } from '../../models/Transaction';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  usersRef!: AngularFireList<any>;
  userRef!: AngularFireObject<any>;
  user: any = {
    'name': "",
    'balance': 0,
    "transactions": []
  };
  constructor(private db: AngularFireDatabase) {}

  createTransaction(transaction: Transaction, email: string,date: Date){
    const userData = {
      "name": "lisa",
      "balance": +this.user.balance + +transaction.amount,
      "transactions": [
        ...this.user.transactions,
        {...transaction,"date": date.toDateString()},
      ]
    }
    this.db.database.ref().child(`users/${email}`).set(userData)
  }

  getUser(email: string){
    this.userRef = this.db.object('users/' + email);
    return this.userRef;
  }
}
