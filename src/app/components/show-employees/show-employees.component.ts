import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { EditEmployessComponent } from '../edit-employess/edit-employess.component';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css'],
})
export class ShowEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  employee: Employee = {
    name: '',
    phone: '',
    email: '',
    job: '',
  };



  constructor(private es: EmployeesService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.es.getEmployees().subscribe((dataEmployees: Employee[]) => {
      this.employees = dataEmployees;
    });
  }

  deleteEmployee(employee: Employee) {
    if (confirm('Are you sure?')) {
      this.es
        .deleteEmployee(employee)
        .then(() => {
          alert('Employee deleted successfuly! ');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  updateEmployee(employee: Employee): void {
    const modalRef = this.modal.open(EditEmployessComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    // pass the id
    modalRef.componentInstance.id = employee.id;
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
}
