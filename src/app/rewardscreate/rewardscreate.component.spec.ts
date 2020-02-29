import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardscreateComponent } from './rewardscreate.component';

describe('RewardscreateComponent', () => {
  let component: RewardscreateComponent;
  let fixture: ComponentFixture<RewardscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
