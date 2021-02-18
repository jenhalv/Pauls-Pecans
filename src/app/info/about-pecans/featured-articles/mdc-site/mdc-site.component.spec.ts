import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcSiteComponent } from './mdc-site.component';

describe('MdcSiteComponent', () => {
  let component: MdcSiteComponent;
  let fixture: ComponentFixture<MdcSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdcSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdcSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
