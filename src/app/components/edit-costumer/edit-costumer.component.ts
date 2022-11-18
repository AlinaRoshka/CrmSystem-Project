import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Costumer } from 'src/app/interfaces/Costumer';
import { CostumersService } from 'src/app/services/costumers.service';

@Component({
  selector: 'app-edit-costumer',
  templateUrl: './edit-costumer.component.html',
  styleUrls: ['./edit-costumer.component.css'],
})
export class EditCostumerComponent implements OnInit {
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
  updateCostumer(): void {
    this.cs
      .updateCostumer(this.costumer)
      .then(() => {
        //close the modal
        this.activeModal.close();
        alert('Costumer updated successfully');
      })
      .catch((err) => console.log(err));
  }

  closeModal(): void {
    this.activeModal.close();
  }
}
