import { Component, Input, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @ViewChild('drawer') drawer!: MatDrawer
  private _isOpen: boolean = false
  
  @Input()
  get isOpen(): boolean{
    return this._isOpen
  }
  set isOpen(value: boolean){
    this._isOpen = value
    this.drawer.toggle()
  }
}
