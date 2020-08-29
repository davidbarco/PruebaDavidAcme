import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterConductorComponent } from './register-conductor.component';

describe('RegisterConductorComponent', () => {
  let component: RegisterConductorComponent;
  let fixture: ComponentFixture<RegisterConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
