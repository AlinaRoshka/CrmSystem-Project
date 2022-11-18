import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Costumer } from 'src/app/interfaces/Costumer';
import { CostumersService } from 'src/app/services/costumers.service';
import { AddCostumerComponent } from '../add-costumer/add-costumer.component';
import { FindCostumerComponent } from '../find-costumer/find-costumer.component';

@Component({
  selector: 'app-main-costumers',
  templateUrl: './main-costumers.component.html',
  styleUrls: ['./main-costumers.component.css'],
})
export class MainCostumersComponent implements OnInit {
  costumers: Costumer[] = [];
  costumer: Costumer = { firstName: '', lastName: '', phone: '', email: '' };
  constructor(private cs: CostumersService, private modal: NgbModal) {}

  ngOnInit(): void {}

  showAddingModal() {
    const modalRef = this.modal.open(AddCostumerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
      keyboard:true
    });
    modalRef.componentInstance.id = this.costumer.id;
  }

  showFindModal(){
    const modalRef = this.modal.open(FindCostumerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
      fullscreen:true,
      keyboard:true
    });
    modalRef.componentInstance.id = this.costumer.id;
  }
}
