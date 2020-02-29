import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitscreateComponent } from './suitscreate.component';

describe('SuitscreateComponent', () => {
  let component: SuitscreateComponent;
  let fixture: ComponentFixture<SuitscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
