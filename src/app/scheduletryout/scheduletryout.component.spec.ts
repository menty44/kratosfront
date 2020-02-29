import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduletryoutComponent } from './scheduletryout.component';

describe('ScheduletryoutComponent', () => {
  let component: ScheduletryoutComponent;
  let fixture: ComponentFixture<ScheduletryoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduletryoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduletryoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
