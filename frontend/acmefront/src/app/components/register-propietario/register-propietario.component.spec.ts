import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPropietarioComponent } from './register-propietario.component';

describe('RegisterPropietarioComponent', () => {
  let component: RegisterPropietarioComponent;
  let fixture: ComponentFixture<RegisterPropietarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPropietarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
