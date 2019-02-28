import {Component, OnInit} from '@angular/core';
import {Staff} from '../staff';
import {StaffService} from '../staff.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffMembers: Staff[];
  sortedStaffMembers: Staff[];

  constructor(private staffService: StaffService) {
    this.sortedStaffMembers = this.staffService.staffMembers.slice();
  }

  ngOnInit() {
    this.getAllStaffMembers();
  }

  getAllStaffMembers() {
    this.staffService.getStaffMembers().subscribe(
      staff => this.staffMembers = staff
    );
  }

  sortData(sort: Sort) {
    const data = this.staffMembers.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedStaffMembers = data;
      return;
    }

    this.sortedStaffMembers = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'surname':
          return compare(a.surname, b.surname, isAsc);
        case 'payRate':
          return compare(a.payRate, b.payRate, isAsc);
        case 'address':
          return compare(a.address, b.address, isAsc);
        case 'role':
          return compare(a.role, b.role, isAsc);
        case 'profileSummary':
          return compare(a.profileSummary, b.profileSummary, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
