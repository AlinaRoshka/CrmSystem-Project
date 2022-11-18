import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumersTableComponent } from './components/costumers-table/costumers-table.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainCostumersComponent } from './components/main-costumers/main-costumers.component';
import { MainEmployeesComponent } from './components/main-employees/main-employees.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'costumers',
    component: MainCostumersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employees',
    component: MainEmployeesComponent,
    canActivate: [AuthGuard],
  },

  { path: '**', component: PnfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
