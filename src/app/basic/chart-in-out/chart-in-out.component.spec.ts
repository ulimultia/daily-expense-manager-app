import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInOutComponent } from './chart-in-out.component';

describe('ChartInOutComponent', () => {
  let component: ChartInOutComponent;
  let fixture: ComponentFixture<ChartInOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartInOutComponent]
    });
    fixture = TestBed.createComponent(ChartInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
