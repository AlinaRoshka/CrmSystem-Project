import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { AddCostumerComponent } from './components/add-costumer/add-costumer.component';
import { CostumersTableComponent } from './components/costumers-table/costumers-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCostumerComponent } from './components/edit-costumer/edit-costumer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CostumerCardComponent } from './costumer-card/costumer-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';
import { EditEmployessComponent } from './components/edit-employess/edit-employess.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { MainCostumersComponent } from './components/main-costumers/main-costumers.component';
import { MainEmployeesComponent } from './components/main-employees/main-employees.component';
import { FindCostumerComponent } from './components/find-costumer/find-costumer.component';
import { FindEmployeesComponent } from './components/find-employees/find-employees.component';
import { FillterEmpPipe } from './pipes/fillter-emp.pipe';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PnfComponent,
    AddCostumerComponent,
    CostumersTableComponent,
    EditCostumerComponent,
    NavBarComponent,
    CostumerCardComponent,
    FilterPipe,
    AddEmployeeComponent,
    ShowEmployeesComponent,
    EditEmployessComponent,
    EmployeeCardComponent,
    MainCostumersComponent,
    MainEmployeesComponent,
    FindCostumerComponent,
    FindEmployeesComponent,
    FillterEmpPipe,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
