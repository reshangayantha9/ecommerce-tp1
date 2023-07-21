import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContextComponent } from './header-context.component';

describe('HeaderContextComponent', () => {
  let component: HeaderContextComponent;
  let fixture: ComponentFixture<HeaderContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderContextComponent]
    });
    fixture = TestBed.createComponent(HeaderContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
