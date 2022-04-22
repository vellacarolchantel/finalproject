import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCourseDashboardComponent } from './select-course-dashboard.component';

describe('SelectCourseDashboardComponent', () => {
  let component: SelectCourseDashboardComponent;
  let fixture: ComponentFixture<SelectCourseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCourseDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCourseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
