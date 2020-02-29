import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulecreateComponent } from './schedulecreate.component';

describe('SchedulecreateComponent', () => {
  let component: SchedulecreateComponent;
  let fixture: ComponentFixture<SchedulecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
