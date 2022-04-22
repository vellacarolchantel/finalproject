import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysopTasksComponent } from './sysop-tasks.component';

describe('SysopTasksComponent', () => {
  let component: SysopTasksComponent;
  let fixture: ComponentFixture<SysopTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysopTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysopTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
