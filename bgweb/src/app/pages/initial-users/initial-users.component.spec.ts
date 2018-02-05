import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialUsersComponent } from './initial-users.component';

describe('InitialUsersComponent', () => {
  let component: InitialUsersComponent;
  let fixture: ComponentFixture<InitialUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
