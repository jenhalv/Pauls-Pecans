import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourFlapGraftVideoComponent } from './four-flap-graft-video.component';

describe('FourFlapGraftVideoComponent', () => {
  let component: FourFlapGraftVideoComponent;
  let fixture: ComponentFixture<FourFlapGraftVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourFlapGraftVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourFlapGraftVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
