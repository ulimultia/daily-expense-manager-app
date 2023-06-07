import { SignupComponent } from './pages/signup/signup.component';
import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardTxnComponent } from './basic/card-txn/card-txn.component';
import { NavbarComponent } from './basic/navbar/navbar.component';
import { ButtonComponent } from './basic/button/button.component';
import { CardBalanceComponent } from './basic/card-balance/card-balance.component';
import { ChartInOutComponent } from './basic/chart-in-out/chart-in-out.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgIf, NgFor, CurrencyPipe, KeyValuePipe} from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideHttpClient } from '@angular/common/http';

// Firebase Auth
import { AuthComponent } from './pages/auth/auth.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from './model/environment';
import { AuthService } from './pages/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { ReportComponent } from './pages/report/report.component';
// import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { PieChartComponent } from './basic/pie-chart/pie-chart.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { TransactionComponent } from './transaction/transaction.component';



@NgModule({
  declarations: [
    AppComponent,
    CardTxnComponent,
    NavbarComponent,
    ButtonComponent,
    DashboardComponent,
    SignupComponent,
    AuthComponent,
    CardBalanceComponent,
    ChartInOutComponent,
    ReportComponent,
    TransactionsComponent,
    TransactionComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    NgxChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
    AuthService,
    CurrencyPipe,
    KeyValuePipe,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
