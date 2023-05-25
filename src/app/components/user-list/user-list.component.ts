import { Component, OnInit } from '@angular/core';

import { IUserDetail } from 'src/app/models/user-detail.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: IUserDetail[] = [];
  displayedColumns: string[] = ['name', 'email', 'actions'];

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }
  //get all list of users
  getUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.userService.users = users;
      this.users = this.userService.users;
    });
  }
  //navigate to edit page by id
  edit(id: number) {
    this.route.navigateByUrl(`/edit/${id}`);
  }
  //delete user
  delete(user: IUserDetail): void {
    if (confirm('Are you sure to delete the user ' + user.name + '?')) {
      this.users = this.users.filter((us) => us !== user);
      this.userService.deleteUser(user.id).subscribe();
    }
  }
}
