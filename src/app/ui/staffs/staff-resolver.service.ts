import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Staff} from './staff';

@Injectable()
export class StaffResolver {

  constructor() { }

  getStaffMember(): Observable<Staff> {
    // TODO: Complete this Resolver
    return undefined;
  }
}
