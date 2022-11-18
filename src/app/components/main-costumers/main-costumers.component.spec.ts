import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCostumersComponent } from './main-costumers.component';

describe('MainCostumersComponent', () => {
  let component: MainCostumersComponent;
  let fixture: ComponentFixture<MainCostumersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCostumersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCostumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
