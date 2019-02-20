import { Component, OnInit } from '@angular/core';
import {Client} from '../client';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientMembers: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.retrieveAllClients();
  }

  retrieveAllClients() {
    this.clientService.getAllClients()
      .subscribe(
        client => this.clientMembers = client
      );
  }

}
