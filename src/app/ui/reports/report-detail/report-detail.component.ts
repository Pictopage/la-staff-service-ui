import { Component, OnInit } from '@angular/core';
import {Report} from '../report';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {

  report: Report;
  reportProfile = 'Report Profile';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        report => this.report = report['report']
      );
  }

}
