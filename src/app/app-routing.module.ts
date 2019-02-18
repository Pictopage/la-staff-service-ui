import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StaffComponent} from './ui/staff/staff.component';
import {ClientComponent} from './ui/client/client.component';
import {ReportComponent} from './ui/report/report.component';
import {HomeComponent} from './ui/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'clients', component: ClientComponent},
  {path: 'reports', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
