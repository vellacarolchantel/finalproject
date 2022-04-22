import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaCohortComponent } from './ta-cohort.component';

describe('TaCohortComponent', () => {
  let component: TaCohortComponent;
  let fixture: ComponentFixture<TaCohortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaCohortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaCohortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
