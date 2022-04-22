import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaAdministrationComponent } from './ta-administration.component';

describe('TaAdministrationComponent', () => {
  let component: TaAdministrationComponent;
  let fixture: ComponentFixture<TaAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
