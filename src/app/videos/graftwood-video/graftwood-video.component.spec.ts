import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraftwoodVideoComponent } from './graftwood-video.component';

describe('GraftwoodVideoComponent', () => {
  let component: GraftwoodVideoComponent;
  let fixture: ComponentFixture<GraftwoodVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraftwoodVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraftwoodVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
