import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {StaffComponent} from './staff/staff.component';
import {StaffService} from './staff/staff.service';
import { ClientComponent } from './client/client.component';
import {ClientService} from './client/client.service';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import {ReportService} from './report/report.service';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, StaffComponent, ClientComponent, ReportComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    StaffService,
    ClientService,
    ReportService
  ]
})
export class UiModule { }
