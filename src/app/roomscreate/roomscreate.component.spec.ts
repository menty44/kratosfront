import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomscreateComponent } from './roomscreate.component';

describe('RoomscreateComponent', () => {
  let component: RoomscreateComponent;
  let fixture: ComponentFixture<RoomscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
