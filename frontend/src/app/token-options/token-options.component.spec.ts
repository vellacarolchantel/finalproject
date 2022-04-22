import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenOptionsComponent } from './token-options.component';

describe('TokenOptionsComponent', () => {
  let component: TokenOptionsComponent;
  let fixture: ComponentFixture<TokenOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
