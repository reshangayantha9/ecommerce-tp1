import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMiddleComponent } from './footer-middle.component';

describe('FooterMiddleComponent', () => {
  let component: FooterMiddleComponent;
  let fixture: ComponentFixture<FooterMiddleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterMiddleComponent]
    });
    fixture = TestBed.createComponent(FooterMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
