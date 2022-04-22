import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaWishListComponent } from './ta-wish-list.component';

describe('TaWishListComponent', () => {
  let component: TaWishListComponent;
  let fixture: ComponentFixture<TaWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaWishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
