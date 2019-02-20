import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StaffComponent} from './ui/staff/staff.component';
import {ClientComponent} from './ui/clients/client.component';
import {ReportComponent} from './ui/report/report.component';
import {HomeComponent} from './ui/home/home.component';
import {ClientDetailComponent} from './ui/clients/client-detail/client-detail.component';
import {ClientResolver} from './ui/clients/client-resolver.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'staff', component: StaffComponent},
  {
    path: 'clients', component: ClientComponent,
    children: [
      {
        path: ':id', component: ClientDetailComponent,
        resolve: {client: ClientResolver}
      }
    ]
  },
  {path: 'reports', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
