import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputboxSimpleComponent } from './inputbox-simple.component';

describe('InputboxSimpleComponent', () => {
  let component: InputboxSimpleComponent;
  let fixture: ComponentFixture<InputboxSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputboxSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputboxSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
