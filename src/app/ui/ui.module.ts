import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {StaffComponent} from './staff/staff.component';
import {StaffService} from './staff/staff.service';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, StaffComponent],
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
