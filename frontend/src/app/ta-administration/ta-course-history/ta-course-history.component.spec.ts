import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaCourseHistoryComponent } from './ta-course-history.component';

describe('TaCourseHistoryComponent', () => {
  let component: TaCourseHistoryComponent;
  let fixture: ComponentFixture<TaCourseHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaCourseHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaCourseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
