import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsessiontoolcreateComponent } from './trainingsessiontoolcreate.component';

describe('TrainingsessiontoolcreateComponent', () => {
  let component: TrainingsessiontoolcreateComponent;
  let fixture: ComponentFixture<TrainingsessiontoolcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsessiontoolcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsessiontoolcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
