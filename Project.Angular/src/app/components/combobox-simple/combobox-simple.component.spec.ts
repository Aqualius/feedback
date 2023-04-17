import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxSimpleComponent } from './combobox-simple.component';

describe('ComboboxSimpleComponent', () => {
  let component: ComboboxSimpleComponent;
  let fixture: ComponentFixture<ComboboxSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboboxSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
