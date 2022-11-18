import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { EditEmployessComponent } from '../edit-employess/edit-employess.component';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';

@Component({
  selector: 'app-find-employees',
  templateUrl: './find-employees.component.html',
  styleUrls: ['./find-employees.component.css'],
})
export class FindEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  employee: Employee = {
    name: '',
    phone: '',
    email: '',
    job: '',
  };

  employeeName: string = '';
  employeePhone: string = '';
  employeeEmail: string = '';
  employeejob: string = '';

  constructor(
    private es: EmployeesService,
    private modal: NgbModal,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.es.getEmployees().subscribe((dataEmployees: Employee[]) => {
      this.employees = dataEmployees;
    });
  }

  showEmployee(employee: Employee): void {
    const modalRef = this.modal.open(EmployeeCardComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    // pass the id
    modalRef.componentInstance.id = employee.id;
  }
  closeModal(): void {
    this.activeModal.close();
  }
}
