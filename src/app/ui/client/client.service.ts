import {Observable, of} from 'rxjs';
import {Client} from './client';
import {Injectable} from '@angular/core';

@Injectable()
export class ClientService {

  private clientMembers: Client[] = [
    {
      id: '12345',
      name: 'Jeremy',
      surname: 'Kyle',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      id: '23456',
      name: 'Sandy',
      surname: 'Jackson',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      id: '34567',
      name: 'Kyle',
      surname: 'Kuzma',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      id: '45678',
      name: 'Lebron',
      surname: 'James',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      id: '4123123',
      name: 'Kobe',
      surname: 'Bryant',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      id: '532433',
      name: 'Kemba',
      surname: 'Walker',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      id: '493481',
      name: 'Thomas',
      surname: 'Jefferson',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      id: '943812',
      name: 'Paul',
      surname: 'George',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    }
  ];

  constructor() { }

  getAllClients(): Observable<Client[]> {
    return of(this.clientMembers);
  }

  getClient(id: string): Observable<Client> {
    return of(this.clientMembers.find(client => client.id === id));
  }
}
