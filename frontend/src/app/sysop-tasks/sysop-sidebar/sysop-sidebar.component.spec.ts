import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysopSidebarComponent } from './sysop-sidebar.component';

describe('SysopSidebarComponent', () => {
  let component: SysopSidebarComponent;
  let fixture: ComponentFixture<SysopSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysopSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysopSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
