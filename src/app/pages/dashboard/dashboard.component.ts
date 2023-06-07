import { TransactionService } from '../../transaction/transaction.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
// import { loadTxn } from 'src/app/model/loadTxn';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user : any;
  recentTxn : any = [];
  txnThisMonth : any = [];
  userBalance = 0;

  constructor(private authService: AuthService, private txnsService: TransactionService) {
    this.recentTxn = this.txnsService.getRecentTxn();
    this.txnThisMonth = this.txnsService.getTxnThisMonth();
    this.userBalance = this.txnsService.countBalance();
  }

  ngOnInit(): void {
    this.authService.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        };
      }
    });

  }
}
