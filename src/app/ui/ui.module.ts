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
import {ReportsComponent} from './reports/reports.component';
import {HomeComponent} from './home/home.component';
import {ReportService} from './reports/report.service';
import {ClientDetailComponent} from './clients/client-detail/client-detail.component';
import {ClientResolver} from './clients/client-resolver.service';
import {Client} from './clients/client';
import {ClientComponent} from './clients/client/client.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffDetailComponent } from './staffs/staff-detail/staff-detail.component';
import {StaffResolver} from './staffs/staff-resolver.service';
import { ReportComponent } from './reports/report/report.component';
import {ReportResolver} from './reports/report-resolver.service';
import { ReportDetailComponent } from './reports/report-detail/report-detail.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    StaffsComponent,
    ClientsComponent,
    ClientComponent,
    ReportsComponent,
    ReportComponent,
    HomeComponent,
    ClientDetailComponent,
    StaffComponent,
    StaffDetailComponent,
    ReportComponent,
    ReportDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: 'client', component: ClientsComponent},
        {path: 'staff', component: StaffComponent},
        {path: 'report', component: ReportComponent}
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
    StaffResolver,
    ReportResolver
  ]
})
export class UiModule {
}
