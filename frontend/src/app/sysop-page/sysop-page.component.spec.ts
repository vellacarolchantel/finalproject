import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysopPageComponent } from './sysop-page.component';

describe('SysopPageComponent', () => {
  let component: SysopPageComponent;
  let fixture: ComponentFixture<SysopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysopPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
