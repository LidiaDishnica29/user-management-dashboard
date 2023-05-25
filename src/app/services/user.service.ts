import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { IUserDetail } from '../models/user-detail.model';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUserDetail[];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUserDetail[]> {
    return this.http
      .get<IUserDetail[]>(`${environment.baseUrl}`)
      .pipe(catchError(this.handleError<IUserDetail[]>('get users', [])));
  }
  getUserById(id: number): Observable<IUserDetail> {
    const url = `${environment.baseUrl}/${id}`;
    return this.http
      .get<IUserDetail>(url)
      .pipe(catchError(this.handleError<IUserDetail>(`get user  id=${id}`)));
  }
  addUsers(user: IUserDetail): Observable<IUserDetail> {
    return this.http
      .post<IUserDetail>(`${environment.baseUrl}`, user, this.httpOptions)
      .pipe(catchError(this.handleError<IUserDetail>('add user')));
  }
  updateUser(user: IUserDetail): Observable<IUserDetail> {
    return this.http
      .put<IUserDetail>(
        `${environment.baseUrl}/${user.id}`,
        user,
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>('updateUser')));
  }
  deleteUser(id: number): Observable<IUserDetail> {
    const url = `${environment.baseUrl}/${id}`;

    return this.http
      .delete<IUserDetail>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<IUserDetail>(`delete user with id ${id}`))
      );
  }
  genId(users: IUserDetail[]): number {
    return users.length > 0
      ? Math.max(...users.map((user) => user.id)) + 1
      : 11;
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
