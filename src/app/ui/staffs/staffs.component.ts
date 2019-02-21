import { Component, OnInit } from '@angular/core';
import {StaffService} from './staff.service';
import {Staff} from './staff';

@Component({
  selector: 'app-staff',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {

  staffMembers: Staff[];

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.getAllStaffMembers();
  }

  getAllStaffMembers() {
    this.staffService.getStaffMembers().subscribe(
      staff => this.staffMembers = staff
    );
  }

}
