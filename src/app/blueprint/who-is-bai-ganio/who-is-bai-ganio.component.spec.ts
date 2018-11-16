import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsBaiGanioComponent } from './who-is-bai-ganio.component';

describe('WhoIsBaiGanioComponent', () => {
  let component: WhoIsBaiGanioComponent;
  let fixture: ComponentFixture<WhoIsBaiGanioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoIsBaiGanioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoIsBaiGanioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
