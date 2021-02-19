import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectingGraftwoodComponent } from './collecting-graftwood.component';

describe('CollectingGraftwoodComponent', () => {
  let component: CollectingGraftwoodComponent;
  let fixture: ComponentFixture<CollectingGraftwoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectingGraftwoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectingGraftwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
