import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Report} from './report';
import {Observable} from 'rxjs';
import {ReportService} from './report.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ReportResolver implements Resolve<Report> {


  constructor(private reportService: ReportService, route: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Report | Observable<Report> {
    const id = +route.params['id'];
    return this.reportService.getReport(id);
  }

}
