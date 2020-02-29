import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingdevicecreateComponent } from './trainingdevicecreate.component';

describe('TrainingdevicecreateComponent', () => {
  let component: TrainingdevicecreateComponent;
  let fixture: ComponentFixture<TrainingdevicecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingdevicecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingdevicecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
