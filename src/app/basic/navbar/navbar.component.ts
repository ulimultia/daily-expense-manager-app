import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnDestroy{
  sidebarQuery: MediaQueryList;

  private _sidebarQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public authService: AuthService) {
    this.sidebarQuery = media.matchMedia('(max-width: 600px)');
    this._sidebarQueryListener = () => changeDetectorRef.detectChanges();
    this.sidebarQuery.addListener(this._sidebarQueryListener);
  }

  ngOnDestroy(): void {
    this.sidebarQuery.removeListener(this._sidebarQueryListener);
  }

  logOut() {
    this.authService.SignOut();
  }


}


