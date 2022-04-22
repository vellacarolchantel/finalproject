import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaSearchComponent } from './ta-search.component';

describe('TaSearchComponent', () => {
  let component: TaSearchComponent;
  let fixture: ComponentFixture<TaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
