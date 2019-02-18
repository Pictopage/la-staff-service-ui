import { Component, OnInit } from '@angular/core';
import {Report} from './report';
import {Observable} from 'rxjs';
import {ReportService} from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  allReports: Report[];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
  }

  private getAllReports(): Observable<Report[]> {
    return this.reportService.getAllReports();
  }

}
