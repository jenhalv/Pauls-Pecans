import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecansComponent } from './pecans.component';

describe('PecansComponent', () => {
  let component: PecansComponent;
  let fixture: ComponentFixture<PecansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
