import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Client} from './client';
import {Observable} from 'rxjs';
import {ClientService} from './client.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ClientResolver implements Resolve<Client> {


  constructor(private clientService: ClientService, router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Client | Observable<Client> {
    const id = +route.params['id'];
    return this.clientService.getClient(id);
  }

}
