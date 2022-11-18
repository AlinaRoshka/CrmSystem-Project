import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces/Employee';

@Pipe({
  name: 'fillterEmp'
})
export class FillterEmpPipe implements PipeTransform {

  transform(
    employees: Employee[],
    propName: keyof Employee,
    value: string
  ): Employee[] {
    let employeeArr: Employee[] = [];
    for (let employee of employees) {
      if (
        (employee[propName] as string)
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        employeeArr.push(employee);
      }
    }
    return employeeArr;
  }

}
