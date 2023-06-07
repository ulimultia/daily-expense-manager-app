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
import { IconComponent } from './icon/icon.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionHistoryDetailComponent } from './transaction/transaction-history-detail/transaction-history-detail.component';
import { TransactionHistoryHeaderComponent } from './transaction/transaction-history-header/transaction-history-header.component';
import { TransactionFormComponent } from './transaction/transaction-form/transaction-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CategoryCardComponent } from './category-card/category-card.component';

@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    ToolbarComponent,
    SidenavComponent,
    IconComponent,
    TransactionHistoryDetailComponent,
    TransactionHistoryHeaderComponent,
    TransactionFormComponent,
    LoadingSpinnerComponent,
    CategoryCardComponent,
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
    SharedModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    CardComponent,
    InputComponent,
    ToolbarComponent,
    SidenavComponent,
    MatTabsModule,
    TransactionHistoryDetailComponent,
    TransactionHistoryHeaderComponent,
    LoadingSpinnerComponent
  ]
})
export class ComponentsModule { }
