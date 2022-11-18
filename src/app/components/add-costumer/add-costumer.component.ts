import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Costumer } from 'src/app/interfaces/Costumer';
import { CostumersService } from 'src/app/services/costumers.service';

@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.css'],
})
export class AddCostumerComponent implements OnInit {
  costumer: Costumer = { firstName: '', lastName: '', phone: '', email: '' };

  constructor(
    private cs: CostumersService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.cs
      .addCostumer(this.costumer)
      .then(() => {
        alert('Costumer was aded successfully');
        this.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  reset(): void {
    this.costumer = { firstName: '', lastName: '', phone: '', email: '' };
  }

  closeModal(): void {
    this.activeModal.close();
  }
}
