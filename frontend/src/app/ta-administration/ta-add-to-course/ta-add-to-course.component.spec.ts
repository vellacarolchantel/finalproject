import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaAddToCourseComponent } from './ta-add-to-course.component';

describe('TaAddToCourseComponent', () => {
  let component: TaAddToCourseComponent;
  let fixture: ComponentFixture<TaAddToCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaAddToCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaAddToCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
