import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Staff} from '../staff';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css']
})
export class StaffDetailComponent implements OnInit {

  staff: Staff;
  staffProfile: 'STAFF PROFILE';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        staff => this.staff = staff['staff']
      );
  }

}
