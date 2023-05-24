import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { IUserDetail } from '../models/user-detail.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000';

  private userDetail$$ = new BehaviorSubject<IUserDetail[]>([]);
  userDetail$ = this.userDetail$$.asObservable();
  private userDetail: IUserDetail[] = [];

  constructor(private http: HttpClient) {}

  loadAllUserResult$: Observable<IUserDetail[]> = this.http
    .get<IUserDetail[]>(`${this.baseUrl}/user-list`)
    .pipe();

  addUserInfo(name: string, email: string) {
    this.userDetail.push({ name, email });
    this.userDetail$$.next(this.userDetail);
  }
}
