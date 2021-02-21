import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringGraftwoodVideoComponent } from './storing-graftwood-video.component';

describe('StoringGraftwoodVideoComponent', () => {
  let component: StoringGraftwoodVideoComponent;
  let fixture: ComponentFixture<StoringGraftwoodVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoringGraftwoodVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringGraftwoodVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
