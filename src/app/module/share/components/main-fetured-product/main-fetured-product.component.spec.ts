import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeturedProductComponent } from './main-fetured-product.component';

describe('MainFeturedProductComponent', () => {
  let component: MainFeturedProductComponent;
  let fixture: ComponentFixture<MainFeturedProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFeturedProductComponent]
    });
    fixture = TestBed.createComponent(MainFeturedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
