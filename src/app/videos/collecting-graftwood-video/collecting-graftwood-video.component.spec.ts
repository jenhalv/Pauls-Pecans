import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectingGraftwoodVideoComponent } from './collecting-graftwood-video.component';

describe('CollectingGraftwoodVideoComponent', () => {
  let component: CollectingGraftwoodVideoComponent;
  let fixture: ComponentFixture<CollectingGraftwoodVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectingGraftwoodVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectingGraftwoodVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
