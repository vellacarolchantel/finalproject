import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseTaComponent } from './search-course-ta.component';

describe('SearchCourseTaComponent', () => {
  let component: SearchCourseTaComponent;
  let fixture: ComponentFixture<SearchCourseTaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCourseTaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
