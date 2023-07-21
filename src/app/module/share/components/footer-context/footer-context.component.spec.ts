import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContextComponent } from './footer-context.component';

describe('FooterContextComponent', () => {
  let component: FooterContextComponent;
  let fixture: ComponentFixture<FooterContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterContextComponent]
    });
    fixture = TestBed.createComponent(FooterContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
