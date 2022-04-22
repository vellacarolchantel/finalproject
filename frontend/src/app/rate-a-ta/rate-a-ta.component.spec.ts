import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateATaComponent } from './rate-a-ta.component';

describe('RateATaComponent', () => {
  let component: RateATaComponent;
  let fixture: ComponentFixture<RateATaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateATaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateATaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
