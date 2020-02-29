import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredititemsComponent } from './credititems.component';

describe('CredititemsComponent', () => {
  let component: CredititemsComponent;
  let fixture: ComponentFixture<CredititemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredititemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredititemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
