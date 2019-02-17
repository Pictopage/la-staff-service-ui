import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StaffComponent} from './ui/staff/staff.component';
import {ClientComponent} from './ui/client/client.component';

const routes: Routes = [
  {path: 'staff', component: StaffComponent},
  {path: 'client', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
