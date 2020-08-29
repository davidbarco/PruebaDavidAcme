import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVehiculoComponent } from './register-vehiculo.component';

describe('RegisterVehiculoComponent', () => {
  let component: RegisterVehiculoComponent;
  let fixture: ComponentFixture<RegisterVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
