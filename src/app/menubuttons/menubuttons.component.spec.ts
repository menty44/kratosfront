import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubuttonsComponent } from './menubuttons.component';

describe('MenubuttonsComponent', () => {
  let component: MenubuttonsComponent;
  let fixture: ComponentFixture<MenubuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
