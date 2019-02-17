import {Observable, of} from 'rxjs';
import {Client} from './client';

export class ClientService {

  private clientMembers: Client[] = [
    {
      name: 'Jeremy',
      surname: 'Kyle',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      name: 'Sandy',
      surname: 'Jackson',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      name: 'Kyle',
      surname: 'Kuzma',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      name: 'Lebron',
      surname: 'James',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      name: 'Kobe',
      surname: 'Bryant',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      name: 'Kemba',
      surname: 'Walker',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
      name: 'Thomas',
      surname: 'Jefferson',
      nhsNumber: '123456',
      healthStatus: 'Head-aches',
      healthHistory: 'Head-aches, Cases of Migraines'
    },
    {
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
}
