import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { CurrencyPipe } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    SharedModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
