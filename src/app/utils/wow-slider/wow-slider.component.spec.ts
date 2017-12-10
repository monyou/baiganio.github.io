import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WowSliderComponent } from './wow-slider.component';

describe('WowSliderComponent', () => {
  let component: WowSliderComponent;
  let fixture: ComponentFixture<WowSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WowSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
