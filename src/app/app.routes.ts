import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentComponent } from './pages/department/department.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'department',
        component: DepartmentComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'ticket-list',
        component: NewListComponent,
      },
      {
        path: 'new-ticket',
        component: NewTicketComponent,
      },
    ],
  },
];
