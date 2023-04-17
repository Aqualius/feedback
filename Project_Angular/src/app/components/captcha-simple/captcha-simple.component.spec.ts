import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaSimpleComponent } from './captcha-simple.component';

describe('CaptchaSimpleComponent', () => {
  let component: CaptchaSimpleComponent;
  let fixture: ComponentFixture<CaptchaSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptchaSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptchaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
