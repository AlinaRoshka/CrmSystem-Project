import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CostumerCardComponent } from 'src/app/costumer-card/costumer-card.component';
import { Costumer } from 'src/app/interfaces/Costumer';
import { CostumersService } from 'src/app/services/costumers.service';
import { EditCostumerComponent } from '../edit-costumer/edit-costumer.component';

@Component({
  selector: 'app-costumers-table',
  templateUrl: './costumers-table.component.html',
  styleUrls: ['./costumers-table.component.css'],
})
export class CostumersTableComponent implements OnInit {
  costumers: Costumer[] = [];
  costumer: Costumer = { firstName: '', lastName: '', phone: '', email: '' };

  

  constructor(private cs: CostumersService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.cs.getCostumers().subscribe((dataCostumers: Costumer[]) => {
      this.costumers = dataCostumers;
    });
  }

  deleteCostumer(costumer: Costumer) {
    if (confirm('Are you sure?')) {
      this.cs
        .deleteCostumer(costumer)
        .then(() => {
          alert('Costumer deleted successfuly! ');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  updateCostumer(costumer: Costumer): void {
    const modalRef = this.modal.open(EditCostumerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    // pass the id
    modalRef.componentInstance.id = costumer.id;
  }

  showCostumer(costumer: Costumer): void {
    const modalRef = this.modal.open(CostumerCardComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    // pass the id
    modalRef.componentInstance.id = costumer.id;
  }
}
