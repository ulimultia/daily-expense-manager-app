import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTxnComponent } from './card-txn.component';

describe('CardComponent', () => {
  let component: CardTxnComponent;
  let fixture: ComponentFixture<CardTxnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTxnComponent]
    });
    fixture = TestBed.createComponent(CardTxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
