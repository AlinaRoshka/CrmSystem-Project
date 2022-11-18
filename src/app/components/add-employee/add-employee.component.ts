import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = {
    name: '',
    phone: '',
    email: '',
    job: '',
  };

  constructor(
    private es: EmployeesService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.es
      .addEmployee(this.employee)
      .then(() => {
        alert('Employee was aded successfully');
        this.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  reset(): void {
    this.employee = {
      name: '',
      phone: '',
      email: '',
      job: '',
    };
  }
  closeModal(): void {
    this.activeModal.close();
  }
}
