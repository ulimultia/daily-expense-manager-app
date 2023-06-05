import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { IconComponent } from './icon/icon.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    ToolbarComponent,
    SidenavComponent,
    TransactionHistoryComponent,
    IconComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    SharedModule
  ],
  exports:[
    CardComponent,
    InputComponent,
    ToolbarComponent,
    SidenavComponent,
    TransactionHistoryComponent,
    MatTabsModule
  ]
})
export class ComponentsModule { }
