import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaPageComponent } from './ta-page.component';

describe('TaPageComponent', () => {
  let component: TaPageComponent;
  let fixture: ComponentFixture<TaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
