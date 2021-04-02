import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruningPhotoCard1Component } from './pruning-photo-card1.component';

describe('PruningPhotoCard1Component', () => {
  let component: PruningPhotoCard1Component;
  let fixture: ComponentFixture<PruningPhotoCard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruningPhotoCard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruningPhotoCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
