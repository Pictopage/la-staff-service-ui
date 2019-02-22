import {Injectable} from '@angular/core';
import {StaffService} from './staff.service';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Staff} from './staff';

@Injectable()
export class StaffResolver implements Resolve<Staff> {

  constructor(private staffService: StaffService, route: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Staff | Observable<Staff> {
    const id = +route.params['id'];
    return this.staffService.getStaffMember(id);
  }
}
