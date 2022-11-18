import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEmployeesComponent } from './find-employees.component';

describe('FindEmployeesComponent', () => {
  let component: FindEmployeesComponent;
  let fixture: ComponentFixture<FindEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
