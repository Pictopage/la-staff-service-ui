import {Staff} from './staff';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class StaffService {

  private staffMembers: Staff[] = [
    {
      id: 1,
      name: 'Thomas',
      surname: 'Jenkins',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'T.Jenkins - Cool dude',
      role: 'Director',
      payRate: '450/day'
    },
    {
      id: 2,
      name: 'Lauren',
      surname: 'Smith',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'L.Smith - 10 years exp',
      role: 'Head Nurse',
      payRate: '50/hr'
    },
    {
      id: 3,
      name: 'Kat',
      surname: 'Williams',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'K.Williams - 5 years exp',
      role: 'Nurse',
      payRate: '30/hr'
    },
    {
      id: 4,
      name: 'Stephen',
      surname: 'Johns',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'S.Johns - 5 months exp',
      role: 'Trainee Nurse',
      payRate: '0/hr'
    },
    {
      id: 5,
      name: 'Lauren',
      surname: 'Hill',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'L.Hill - Been working for 6 years.',
      role: 'Carer',
      payRate: '25/hr'
    },
    {
      id: 6,
      name: 'Obert',
      surname: 'Roberts',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'O.Roberts - Been working for 3 years',
      role: 'Cleaner',
      payRate: '10/hr'
    },
    {
      id: 7,
      name: 'Terrence',
      surname: 'Phillips',
      address: '28 march close, Sunningdale, Surrey',
      profileSummary: 'T.Phillips - Been working for 16 years',
      role: 'Cook',
      payRate: '250/day'
    }
  ];

  constructor() { }

  getStaffMembers(): Observable<Staff[]> {
    return of(this.staffMembers);
  }

  getStaffMember(id): Observable<Staff> {
    return of(this.staffMembers.find(staff => staff.id === id));
  }
}

