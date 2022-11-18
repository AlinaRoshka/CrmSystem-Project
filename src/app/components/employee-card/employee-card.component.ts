import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  @Input() id?: string;
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

  ngOnInit(): void {
    if (this.id) {
      this.es.getEmployeeById(this.id).subscribe((employeeData) => {
        this.employee = employeeData;
      });
    }
  }


  closeModal(): void {
    this.activeModal.close();
  }
}
