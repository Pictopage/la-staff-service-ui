import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Report} from './report';

@Injectable()
export class ReportService {

  private allRetrievedReports: Report[] = [
    {
      id: '12345',
      groupId: '4411',
      groupType: 'TYPE A',
      numberOfHours: '100',
      missedCalls: '15'
    }
  ];

  getAllReports(): Observable<Report[]> {
    return of(this.allRetrievedReports);
  }
}
