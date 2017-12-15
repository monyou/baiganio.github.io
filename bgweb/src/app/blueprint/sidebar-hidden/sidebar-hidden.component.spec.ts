import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHiddenComponent } from './sidebar-hidden.component';

describe('SidebarHiddenComponent', () => {
  let component: SidebarHiddenComponent;
  let fixture: ComponentFixture<SidebarHiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
