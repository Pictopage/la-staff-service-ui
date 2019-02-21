import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {StaffsComponent} from './staffs/staffs.component';
import {StaffService} from './staffs/staff.service';
import {ClientsComponent} from './clients/clients.component';
import {ClientService} from './clients/client.service';
import {ReportComponent} from './report/report.component';
import {HomeComponent} from './home/home.component';
import {ReportService} from './report/report.service';
import {ClientDetailComponent} from './clients/client-detail/client-detail.component';
import {ClientResolver} from './clients/client-resolver.service';
import {Client} from './clients/client';
import {ClientComponent} from './clients/client/client.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffDetailComponent } from './staffs/staff-detail/staff-detail.component';
import {StaffResolver} from './staffs/staff-resolver.service';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    StaffsComponent,
    ClientsComponent,
    ClientComponent,
    ReportComponent,
    HomeComponent,
    ClientDetailComponent,
    StaffComponent,
    StaffDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: 'client', component: ClientsComponent},
        {path: 'staff', component: StaffComponent}
      ]
    )
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    StaffService,
    Client,
    ClientService,
    ReportService,
    ClientResolver,
    StaffResolver
  ]
})
export class UiModule {
}
