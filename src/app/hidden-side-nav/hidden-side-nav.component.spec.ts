import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenSideNavComponent } from './hidden-side-nav.component';

describe('HiddenSideNavComponent', () => {
  let component: HiddenSideNavComponent;
  let fixture: ComponentFixture<HiddenSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
