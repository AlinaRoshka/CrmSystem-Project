import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employess',
  templateUrl: './edit-employess.component.html',
  styleUrls: ['./edit-employess.component.css'],
})
export class EditEmployessComponent implements OnInit {
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

  updateEmployee():void{
    this.es
      .updateEmployee(this.employee)
      .then(() => {
        //close the modal
        this.activeModal.close();
        alert('Employee updated successfully');
      })
      .catch((err) => console.log(err));
  }

  closeModal(): void {
    this.activeModal.close();
  }
}
