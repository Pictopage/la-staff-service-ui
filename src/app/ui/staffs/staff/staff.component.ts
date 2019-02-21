import { Component, OnInit } from '@angular/core';
import {Staff} from '../staff';
import {StaffService} from '../staff.service';

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
