import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioscreateComponent } from './studioscreate.component';

describe('StudioscreateComponent', () => {
  let component: StudioscreateComponent;
  let fixture: ComponentFixture<StudioscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
