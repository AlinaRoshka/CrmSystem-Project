import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEmployeesComponent } from './main-employees.component';

describe('MainEmployeesComponent', () => {
  let component: MainEmployeesComponent;
  let fixture: ComponentFixture<MainEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
