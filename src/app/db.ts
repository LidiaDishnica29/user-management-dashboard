import { IUserDetail } from './models/user-detail.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 2, name: 'Lidiaa',email:'lidia@dishn.com' },
      { id: 3, name: 'Lidiaass',email:'test@dishn.com' },
      { id: 4, name: 'Lida33',email:'prova@dishn.com' },

    ];
    return {users};
  }

  genId(users: IUserDetail[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }
}
