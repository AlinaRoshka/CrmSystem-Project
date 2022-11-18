import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/interfaces/Employee';
import { AddCostumerComponent } from '../add-costumer/add-costumer.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { FindCostumerComponent } from '../find-costumer/find-costumer.component';
import { FindEmployeesComponent } from '../find-employees/find-employees.component';

@Component({
  selector: 'app-main-employees',
  templateUrl: './main-employees.component.html',
  styleUrls: ['./main-employees.component.css'],
})
export class MainEmployeesComponent implements OnInit {
  constructor(private modal: NgbModal) {}
  employees: Employee[] = [];
  employee: Employee = {
    name: '',
    phone: '',
    email: '',
    job: '',
  };

  ngOnInit(): void {}
  showAddingModal() {
    const modalRef = this.modal.open(AddEmployeeComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
      keyboard: true,
    });
    modalRef.componentInstance.id = this.employee.id;
  }

  showFindModal() {
    const modalRef = this.modal.open(FindEmployeesComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
      fullscreen: true,
      keyboard: true,
    });
    modalRef.componentInstance.id = this.employee.id;
  }
}
