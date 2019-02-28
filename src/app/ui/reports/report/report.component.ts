import { Component, OnInit } from '@angular/core';
import {Report} from '../report';
import {ReportService} from '../report.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  allReports: Report[];
  sortedReports: Report[];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.getAllReports();
  }

  private getAllReports() {
    return this.reportService.getAllReports()
      .subscribe(
        reports => this.allReports = reports
      );
  }

  sortData(sort: Sort) {
    const data = this.allReports.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedReports = data;
      return;
    }

    this.sortedReports = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'groupId':
          return compare(a.groupId, b.groupId, isAsc);
        case 'groupType':
          return compare(a.groupType, b.groupType, isAsc);
        case 'numberOfHours':
          return compare(a.numberOfHours, b.numberOfHours, isAsc);
        case 'title':
          return compare(a.title, b.title, isAsc);
        case 'missedCalls':
          return compare(a.missedCalls, b.missedCalls, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
