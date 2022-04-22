import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaRemoveFromCourseComponent } from './ta-remove-from-course.component';

describe('TaRemoveFromCourseComponent', () => {
  let component: TaRemoveFromCourseComponent;
  let fixture: ComponentFixture<TaRemoveFromCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaRemoveFromCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaRemoveFromCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
