import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StaffsComponent} from './ui/staffs/staffs.component';
import {ReportsComponent} from './ui/reports/reports.component';
import {HomeComponent} from './ui/home/home.component';
import {ClientDetailComponent} from './ui/clients/client-detail/client-detail.component';
import {ClientResolver} from './ui/clients/client-resolver.service';
import {ClientsComponent} from './ui/clients/clients.component';
import {ClientComponent} from './ui/clients/client/client.component';
import {StaffComponent} from './ui/staffs/staff/staff.component';
import {StaffDetailComponent} from './ui/staffs/staff-detail/staff-detail.component';
import {StaffResolver} from './ui/staffs/staff-resolver.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'staffs', component: StaffsComponent,
    children: [
      {path: '', component: StaffComponent},
      {
        path: ':id', component: StaffDetailComponent,
        resolve: {staff: StaffResolver}
      }
    ]
  },
  {
    path: 'clients', component: ClientsComponent,
    children: [
      {path: '', component: ClientComponent},
      {
        path: ':id', component: ClientDetailComponent,
        resolve: {client: ClientResolver}
      }
    ]
  },
  {path: 'reports', component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
