import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraftingComponent } from './grafting.component';

describe('GraftingComponent', () => {
  let component: GraftingComponent;
  let fixture: ComponentFixture<GraftingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraftingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
