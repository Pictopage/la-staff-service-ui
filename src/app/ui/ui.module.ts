import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {StaffComponent} from './staff/staff.component';
import {StaffService} from './staff/staff.service';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, StaffComponent, ClientComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    StaffService
  ]
})
export class UiModule { }
