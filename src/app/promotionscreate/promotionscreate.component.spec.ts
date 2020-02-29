import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionscreateComponent } from './promotionscreate.component';

describe('PromotionscreateComponent', () => {
  let component: PromotionscreateComponent;
  let fixture: ComponentFixture<PromotionscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
