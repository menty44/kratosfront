import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionitemsComponent } from './subscriptionitems.component';

describe('SubscriptionitemsComponent', () => {
  let component: SubscriptionitemsComponent;
  let fixture: ComponentFixture<SubscriptionitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
