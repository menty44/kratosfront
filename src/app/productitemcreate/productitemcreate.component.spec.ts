import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductitemcreateComponent } from './productitemcreate.component';

describe('ProductitemcreateComponent', () => {
  let component: ProductitemcreateComponent;
  let fixture: ComponentFixture<ProductitemcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductitemcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductitemcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
