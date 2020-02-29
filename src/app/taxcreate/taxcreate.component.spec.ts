import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxcreateComponent } from './taxcreate.component';

describe('TaxcreateComponent', () => {
  let component: TaxcreateComponent;
  let fixture: ComponentFixture<TaxcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
