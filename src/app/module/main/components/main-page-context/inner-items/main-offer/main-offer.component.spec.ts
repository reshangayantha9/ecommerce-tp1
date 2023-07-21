import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOfferComponent } from './main-offer.component';

describe('MainOfferComponent', () => {
  let component: MainOfferComponent;
  let fixture: ComponentFixture<MainOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainOfferComponent]
    });
    fixture = TestBed.createComponent(MainOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
