import {Staff} from './staff';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class StaffService {

  staffMembers: Staff[] = [
    {
      id: 1,
      name: 'Thomas',
      surname: 'Jenkins',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'T.Jenkins - Cool dude',
      role: 'Director',
      payRate: '450/hr'
    },
    {
      id: 2,
      name: 'Thomas',
      surname: 'Jenkins',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'T.Jenkins - Cool dude',
      role: 'Director',
      payRate: '450/hr'
    },
    {
      id: 3,
      name: 'Thomas',
      surname: 'Jenkins',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'T.Jenkins - Cool dude',
      role: 'Director',
      payRate: '450/hr'
    },
    {
      id: 4,
      name: 'Thomas',
      surname: 'Jenkins',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'T.Jenkins - Cool dude',
      role: 'Director',
      payRate: '450/hr'
    },
    {
      id: 5,
      name: 'Thomas',
      surname: 'Jenkins',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'T.Jenkins - Cool dude',
      role: 'Director',
      payRate: '450/hr'
    },
    {
      id: 6,
      name: 'Thomas',
      surname: 'Jenkins',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'T.Jenkins - Cool dude',
      role: 'Director',
      payRate: '450/hr'
    },
    {
      id: 7,
      name: 'Thomas',
      surname: 'Jenkins',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'T.Jenkins - Cool dude',
      role: 'Director',
      payRate: '450/hr'
    }
  ];

  constructor() { }

  getStaffMembers(): Observable<Staff[]> {
    return of(this.staffMembers);
  }
}

