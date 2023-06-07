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
  constructor(private db: AngularFireDatabase) {}

  createTransaction(transaction: Transaction, email: string,date: Date){
    const data = {
      "name": "lisa",
      "balance": 100000,
      "transactions": [
        {...transaction,"date": date.toDateString()},
      ]
    }
    this.db.database.ref().child(`users/${email}`).set(data)
  }

  getUser(email: string){
    this.userRef = this.db.object('users/' + email);
    return this.userRef;
  }
}
