import { SignupComponent } from './auth/signup/signup.component';
import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { CurrencyPipe } from '@angular/common';
import { SharedModule } from './shared/shared.module';

import { CardComponent } from './basic/card/card.component';
import { NavbarComponent } from './basic/navbar/navbar.component';
import { ButtonComponent } from './basic/button/button.component';
import { CardBalanceComponent } from './basic/card-balance/card-balance.component';
import { ChartInOutComponent } from './basic/chart-in-out/chart-in-out.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
import { NgIf, NgFor } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { provideHttpClient } from '@angular/common/http';

// Firebase Auth
import { AuthComponent } from './auth/auth.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from './model/environment';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    ButtonComponent,
    DashboardComponent,
    SignupComponent,
    AuthComponent,
    TransactionsComponent,
    CardBalanceComponent,
    ChartInOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    SharedModule,
    ComponentsModule,
    SharedModule,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    CanvasJSAngularChartsModule,
  ],
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
    AuthService,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
