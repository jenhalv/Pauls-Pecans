import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruningComponent } from './pruning.component';

describe('PruningComponent', () => {
  let component: PruningComponent;
  let fixture: ComponentFixture<PruningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
