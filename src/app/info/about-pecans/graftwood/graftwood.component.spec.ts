import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraftwoodComponent } from './graftwood.component';

describe('GraftwoodComponent', () => {
  let component: GraftwoodComponent;
  let fixture: ComponentFixture<GraftwoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraftwoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraftwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
