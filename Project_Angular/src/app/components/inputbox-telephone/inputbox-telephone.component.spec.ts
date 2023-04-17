import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputboxTelephoneComponent } from './inputbox-telephone.component';

describe('InputboxTelephoneComponent', () => {
  let component: InputboxTelephoneComponent;
  let fixture: ComponentFixture<InputboxTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputboxTelephoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputboxTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
