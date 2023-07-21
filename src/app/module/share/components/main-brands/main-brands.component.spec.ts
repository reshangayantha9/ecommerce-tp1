import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBrandsComponent } from './main-brands.component';

describe('MainBrandsComponent', () => {
  let component: MainBrandsComponent;
  let fixture: ComponentFixture<MainBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBrandsComponent]
    });
    fixture = TestBed.createComponent(MainBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
