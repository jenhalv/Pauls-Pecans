import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruningVideoComponent } from './pruning-video.component';

describe('PruningVideoComponent', () => {
  let component: PruningVideoComponent;
  let fixture: ComponentFixture<PruningVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruningVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruningVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
