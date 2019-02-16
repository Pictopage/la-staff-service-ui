import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StaffComponent} from './ui/staff/staff.component';

const routes: Routes = [
  {path: '', component: StaffComponent},
  {path: 'staff', component: StaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
