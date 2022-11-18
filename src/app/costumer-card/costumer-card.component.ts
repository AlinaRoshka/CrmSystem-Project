import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Costumer } from '../interfaces/Costumer';
import { CostumersService } from '../services/costumers.service';

@Component({
  selector: 'app-costumer-card',
  templateUrl: './costumer-card.component.html',
  styleUrls: ['./costumer-card.component.css'],
})
export class CostumerCardComponent implements OnInit {
  @Input() id?: string;
  costumer: Costumer = { firstName: '', lastName: '', phone: '', email: '' };

  constructor(
    private cs: CostumersService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.cs.getCostumerById(this.id).subscribe((costumerData: Costumer) => {
        this.costumer = costumerData;
      });
    }
  }

  closeModal(): void {
    this.activeModal.close();
  }
}
