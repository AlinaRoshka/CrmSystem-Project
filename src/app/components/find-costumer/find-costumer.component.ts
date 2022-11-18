import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CostumerCardComponent } from 'src/app/costumer-card/costumer-card.component';
import { Costumer } from 'src/app/interfaces/Costumer';
import { CostumersService } from 'src/app/services/costumers.service';

@Component({
  selector: 'app-find-costumer',
  templateUrl: './find-costumer.component.html',
  styleUrls: ['./find-costumer.component.css'],
})
export class FindCostumerComponent implements OnInit {
  costumers: Costumer[] = [];
  costumer: Costumer = { firstName: '', lastName: '', phone: '', email: '' };

  costumerFirstName: string = '';
  costumerLastName: string = '';
  costumerPhone: string = '';
  costumerEmail: string = '';

  constructor(
    private cs: CostumersService,
    private modal: NgbModal,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.cs.getCostumers().subscribe((dataCostumers: Costumer[]) => {
      this.costumers = dataCostumers;
    });
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

  closeModal(): void {
    this.activeModal.close();
  }
}
