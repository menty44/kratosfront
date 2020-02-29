import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredititemscreateComponent } from './credititemscreate.component';

describe('CredititemscreateComponent', () => {
  let component: CredititemscreateComponent;
  let fixture: ComponentFixture<CredititemscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredititemscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredititemscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
