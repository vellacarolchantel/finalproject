import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaPerfomanceLogComponent } from './ta-perfomance-log.component';

describe('TaPerfomanceLogComponent', () => {
  let component: TaPerfomanceLogComponent;
  let fixture: ComponentFixture<TaPerfomanceLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaPerfomanceLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaPerfomanceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
