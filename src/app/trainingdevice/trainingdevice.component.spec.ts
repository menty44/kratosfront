import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingdeviceComponent } from './trainingdevice.component';

describe('TrainingdeviceComponent', () => {
  let component: TrainingdeviceComponent;
  let fixture: ComponentFixture<TrainingdeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingdeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingdeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
