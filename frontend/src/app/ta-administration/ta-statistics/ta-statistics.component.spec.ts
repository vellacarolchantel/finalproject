import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaStatisticsComponent } from './ta-statistics.component';

describe('TaStatisticsComponent', () => {
  let component: TaStatisticsComponent;
  let fixture: ComponentFixture<TaStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
