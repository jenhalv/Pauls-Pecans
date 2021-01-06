import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPecansComponent } from './about-pecans.component';

describe('AboutPecansComponent', () => {
  let component: AboutPecansComponent;
  let fixture: ComponentFixture<AboutPecansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPecansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPecansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
