import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHistoryHeaderComponent } from './transaction-history-header.component';

describe('TransactionHistoryHeaderComponent', () => {
  let component: TransactionHistoryHeaderComponent;
  let fixture: ComponentFixture<TransactionHistoryHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionHistoryHeaderComponent]
    });
    fixture = TestBed.createComponent(TransactionHistoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
