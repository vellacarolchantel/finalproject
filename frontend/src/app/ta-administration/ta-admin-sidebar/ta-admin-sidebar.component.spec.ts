import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaAdminSidebarComponent } from './ta-admin-sidebar.component';

describe('TaAdminSidebarComponent', () => {
  let component: TaAdminSidebarComponent;
  let fixture: ComponentFixture<TaAdminSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaAdminSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
