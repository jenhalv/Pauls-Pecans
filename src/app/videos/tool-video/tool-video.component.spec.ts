import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolVideoComponent } from './tool-video.component';

describe('ToolVideoComponent', () => {
  let component: ToolVideoComponent;
  let fixture: ComponentFixture<ToolVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
