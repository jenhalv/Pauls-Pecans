import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeVideoComponent } from './purpose-video.component';

describe('PurposeVideoComponent', () => {
  let component: PurposeVideoComponent;
  let fixture: ComponentFixture<PurposeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurposeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
