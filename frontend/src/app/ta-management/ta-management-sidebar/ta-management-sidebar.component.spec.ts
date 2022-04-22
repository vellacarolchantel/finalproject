import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaManagementSidebarComponent } from './ta-management-sidebar.component';

describe('TaManagementSidebarComponent', () => {
  let component: TaManagementSidebarComponent;
  let fixture: ComponentFixture<TaManagementSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaManagementSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaManagementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
