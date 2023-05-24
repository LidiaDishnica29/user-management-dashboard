import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { IUserDetail } from '../models/user-detail.model';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

users : IUserDetail[];
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private http: HttpClient) {}


  getUsers(): Observable<IUserDetail[]> {
    return this.http.get<IUserDetail[]>(`${environment.baseUrl}`)
      .pipe(
        catchError(this.handleError<IUserDetail[]>('get users', []))
      );
  }
  addUsers(user:IUserDetail): Observable<IUserDetail> {
    debugger;
    return this.http.post<IUserDetail>(`${environment.baseUrl}`, user, this.httpOptions).pipe(
      catchError(this.handleError<IUserDetail>('add user'))
    );
  }

  genId(users: IUserDetail[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
  getUserById(id: number): Observable<IUserDetail> {
    const url = `${environment.baseUrl}${id}`;
    return this.http.get<IUserDetail>(url).pipe(
      catchError(this.handleError<IUserDetail>(`getHero id=${id}`))
    );
  }


deleteUser(id: number): Observable<IUserDetail> {
  const url = `${environment.baseUrl}${id}`;

  return this.http.delete<IUserDetail>(url, this.httpOptions).pipe(
    catchError(this.handleError<IUserDetail>(`delete user with id ${id}`))
  );
}

updateUser(user: IUserDetail): Observable<any> {
  return this.http.put(`${environment.baseUrl}`, user, this.httpOptions).pipe(
    catchError(this.handleError<any>('updateUser'))
  );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
  };
}
}
