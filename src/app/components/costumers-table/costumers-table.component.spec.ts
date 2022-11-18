import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumersTableComponent } from './costumers-table.component';

describe('CostumersTableComponent', () => {
  let component: CostumersTableComponent;
  let fixture: ComponentFixture<CostumersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
