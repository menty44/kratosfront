import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsessiontoolComponent } from './trainingsessiontool.component';

describe('TrainingsessiontoolComponent', () => {
  let component: TrainingsessiontoolComponent;
  let fixture: ComponentFixture<TrainingsessiontoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsessiontoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsessiontoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
