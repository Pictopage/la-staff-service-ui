import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Report} from './report';

@Injectable()
export class ReportService {

  allRetrievedReports: Report[] = [
    {
      id: 1234,
      title: 'Some Title',
      groupId: '4411',
      groupType: 'TYPE A',
      numberOfHours: '100',
      missedCalls: '15',
      region: 'Surrey'
    },
    {
      id: 3658,
      title: 'Some Title',
      groupId: '4411',
      groupType: 'TYPE A',
      numberOfHours: '100',
      missedCalls: '5',
      region: 'Hampshire'
    },
    {
      id: 7764,
      title: 'Some Title',
      groupId: '4411',
      groupType: 'TYPE A',
      numberOfHours: '100',
      missedCalls: '30',
      region: 'Berkshire'
    },
    {
      id: 7764,
      title: 'Some Title',
      groupId: '4411',
      groupType: 'TYPE A',
      numberOfHours: '100',
      missedCalls: '27',
      region: 'London'
    }
  ];

  getAllReports(): Observable<Report[]> {
    return of(this.allRetrievedReports);
  }

  getReport(id: number): Observable<Report> {
    return of(this.allRetrievedReports.find(report => report.id === id));
  }
}
