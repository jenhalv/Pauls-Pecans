import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayGraftVideoComponent } from './inlay-graft-video.component';

describe('InlayGraftVideoComponent', () => {
  let component: InlayGraftVideoComponent;
  let fixture: ComponentFixture<InlayGraftVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlayGraftVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlayGraftVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
