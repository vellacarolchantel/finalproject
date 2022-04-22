import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProfCourseComponent } from './import-prof-course.component';

describe('ImportProfCourseComponent', () => {
  let component: ImportProfCourseComponent;
  let fixture: ComponentFixture<ImportProfCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportProfCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProfCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
