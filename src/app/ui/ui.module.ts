import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {StaffComponent} from './staff/staff.component';
import {StaffService} from './staff/staff.service';
import {ClientComponent} from './clients/client.component';
import {ClientService} from './clients/client.service';
import {ReportComponent} from './report/report.component';
import {HomeComponent} from './home/home.component';
import {ReportService} from './report/report.service';
import {ClientDetailComponent} from './clients/client-detail/client-detail.component';
import {ClientResolver} from './clients/client-resolver.service';
import {Client} from './clients/client';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    StaffComponent,
    ClientComponent,
    ReportComponent,
    HomeComponent,
    ClientDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: 'client', component: ClientComponent}
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
    ClientResolver
  ]
})
export class UiModule {
}
