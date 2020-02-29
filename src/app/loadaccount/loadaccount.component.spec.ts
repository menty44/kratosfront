import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadaccountComponent } from './loadaccount.component';

describe('LoadaccountComponent', () => {
  let component: LoadaccountComponent;
  let fixture: ComponentFixture<LoadaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
