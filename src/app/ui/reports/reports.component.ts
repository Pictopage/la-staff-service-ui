import { Component, OnInit } from '@angular/core';
import {Report} from './report';
import {ReportService} from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  allReports: Report[];

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

}
