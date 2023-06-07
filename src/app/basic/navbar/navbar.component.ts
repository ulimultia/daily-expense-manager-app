import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { EventEmitter, Output } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { TransactionFormComponent } from 'src/app/components/transaction/transaction-form/transaction-form.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy{
  sidebarQuery: MediaQueryList;
  user : any;

  private _sidebarQueryListener: () => void;

  @Output() menuClickEvent = new EventEmitter()

  menuClick(){
    this.menuClickEvent.emit()
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public authService: AuthService, public dialog: MatDialog) {
    this.sidebarQuery = media.matchMedia('(max-width: 600px)');
    this._sidebarQueryListener = () => changeDetectorRef.detectChanges();
    this.sidebarQuery.addListener(this._sidebarQueryListener);
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
        console.log("navbar:  ", this.user);
      }
    });
  }

  ngOnDestroy(): void {
    this.sidebarQuery.removeListener(this._sidebarQueryListener);
  }

  openDialog() {
    const dialogRef = this.dialog.open(TransactionFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logOut() {
    this.authService.SignOut();
  }


}


