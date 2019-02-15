import { Component, OnInit } from '@angular/core';
import {StaffService} from './staff.service';
import {Staff} from './staff';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

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
