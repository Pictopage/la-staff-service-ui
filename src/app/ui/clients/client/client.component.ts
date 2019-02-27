import { Component, OnInit } from '@angular/core';
import {Client} from '../client';
import {ClientService} from '../client.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientMembers: Client[];
  sortedMembersData: Client[];

  constructor(private clientService: ClientService) {
    this.sortedMembersData = this.clientService.clientMembers.slice();
  }

  ngOnInit() {
    this.retrieveAllClients();
  }

  retrieveAllClients() {
    this.clientService.getAllClients()
      .subscribe(
        client => this.clientMembers = client
      );
  }


  sortData(sort: Sort) {
    const data = this.clientMembers.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedMembersData = data;
      return;
    }

    // id: number;
    // name: string;
    // surname: string;
    // nhsNumber: string;
    // healthStatus: string;
    // healthHistory: string;

    this.sortedMembersData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'surname':
          return compare(a.surname, b.surname, isAsc);
        case 'nhsNumber':
          return compare(a.nhsNumber, b.nhsNumber, isAsc);
        case 'healthStatus':
          return compare(a.healthStatus, b.healthStatus, isAsc);
        case 'protein':
          return compare(a.healthHistory, b.healthHistory, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
