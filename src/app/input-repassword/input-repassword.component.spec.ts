import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRepasswordComponent } from './input-repassword.component';

describe('InputRepasswordComponent', () => {
  let component: InputRepasswordComponent;
  let fixture: ComponentFixture<InputRepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRepasswordComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
