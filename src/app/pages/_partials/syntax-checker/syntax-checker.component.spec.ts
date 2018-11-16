import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxCheckerComponent } from './syntax-checker.component';

describe('SyntaxCheckerComponent', () => {
  let component: SyntaxCheckerComponent;
  let fixture: ComponentFixture<SyntaxCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntaxCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntaxCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
