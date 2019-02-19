import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Report} from './report';

@Injectable()
export class ReportService {

  private allRetrievedReports: Report[] = [
    {
      id: '1234',
      groupId: '4411',
      groupType: 'TYPE A',
      numberOfHours: '100',
      missedCalls: '15',
      region: 'Surrey'
    },
    {
      id: '3658',
      groupId: '4411',
      groupType: 'TYPE A',
      numberOfHours: '100',
      missedCalls: '15',
      region: 'Hampshire'
    },
    {
      id: '7764',
      groupId: '4411',
      groupType: 'TYPE A',
      numberOfHours: '100',
      missedCalls: '15',
      region: 'Berkshire'
    },
    {
      id: '7764',
      groupId: '4411',
      groupType: 'TYPE A',
      numberOfHours: '100',
      missedCalls: '15',
      region: 'London'
    }
  ];

  getAllReports(): Observable<Report[]> {
    return of(this.allRetrievedReports);
  }
}
