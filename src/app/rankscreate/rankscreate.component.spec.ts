import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankscreateComponent } from './rankscreate.component';

describe('RankscreateComponent', () => {
  let component: RankscreateComponent;
  let fixture: ComponentFixture<RankscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
