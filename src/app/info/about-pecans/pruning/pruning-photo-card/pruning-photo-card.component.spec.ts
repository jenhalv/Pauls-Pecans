import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruningPhotoCardComponent } from './pruning-photo-card.component';

describe('PruningPhotoCardComponent', () => {
  let component: PruningPhotoCardComponent;
  let fixture: ComponentFixture<PruningPhotoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruningPhotoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruningPhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
