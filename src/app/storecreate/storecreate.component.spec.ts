import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorecreateComponent } from './storecreate.component';

describe('StorecreateComponent', () => {
  let component: StorecreateComponent;
  let fixture: ComponentFixture<StorecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
