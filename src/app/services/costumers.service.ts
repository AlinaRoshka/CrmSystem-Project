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
import { Costumer } from '../interfaces/Costumer';

@Injectable({
  providedIn: 'root',
})
export class CostumersService {
  costumersRef = collection(this.fireStore, 'costumers');

  constructor(private fireStore: Firestore) {}

  addCostumer(costumer: Costumer): Promise<DocumentReference<Costumer>> {
    return addDoc(this.costumersRef, costumer) as Promise<
      DocumentReference<Costumer>
    >;
  }

  getCostumers(): Observable<Costumer[]> {
    return collectionData(this.costumersRef, {idField: 'id'}) as Observable<Costumer[]>;
  }
  deleteCostumer(costumer: Costumer): Promise<void> {
    const costumersRef = doc(this.fireStore, `costumers/${costumer.id}`);
    return deleteDoc(costumersRef) as Promise<void>;
  }
  updateCostumer(costumer: Costumer): Promise<void> {
    const costumersRef = doc(this.fireStore, `costumers/${costumer.id}`);
    return setDoc(costumersRef, costumer) as Promise<void>;
  }
  getCostumerById(id: string): Observable<Costumer> {
    const costumersRef = doc(this.fireStore, `costumers/${id}`);
    return docData(costumersRef, { idField: 'id' }) as Observable<Costumer>;
  }

}


