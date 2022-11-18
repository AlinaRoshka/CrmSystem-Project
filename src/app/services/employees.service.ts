import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  DocumentReference,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  emoloyeesRef = collection(this.fireStore, 'employees');
  constructor(private fireStore: Firestore) {}

  addEmployee(employee: Employee): Promise<DocumentReference<Employee>> {
    return addDoc(this.emoloyeesRef, employee) as Promise<
      DocumentReference<Employee>
    >;
  }

  getEmployees(): Observable<Employee[]> {
    return collectionData(this.emoloyeesRef, { idField: 'id' }) as Observable<
      Employee[]
    >;
  }

  deleteEmployee(employee: Employee): Promise<void> {
    const emoloyeesRef = doc(this.fireStore, `employees/${employee.id}`);
    return deleteDoc(emoloyeesRef) as Promise<void>;
  }
  updateEmployee(employee: Employee): Promise<void> {
    const emoloyeesRef = doc(this.fireStore, `employees/${employee.id}`);
    return setDoc(emoloyeesRef, employee) as Promise<void>;
  }
  getEmployeeById(id: string): Observable<Employee> {
    const emoloyeesRef = doc(this.fireStore, `employees/${id}`);
    return docData(emoloyeesRef, { idField: 'id' }) as Observable<Employee>;
  }
}
