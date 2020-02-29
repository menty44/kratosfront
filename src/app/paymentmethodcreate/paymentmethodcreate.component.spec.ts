import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmethodcreateComponent } from './paymentmethodcreate.component';

describe('PaymentmethodcreateComponent', () => {
  let component: PaymentmethodcreateComponent;
  let fixture: ComponentFixture<PaymentmethodcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentmethodcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmethodcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
