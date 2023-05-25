import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IUserDetail } from 'src/app/models/user-detail.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: IUserDetail[] = [];
  constructor(
    private userService: UserService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.userService.users = users;
      this.users = this.userService.users;
    });
  }

  displayedColumns: string[] = ['name', 'email', 'actions'];

  edit(id: number) {
    console.log(id);
    this.route.navigateByUrl(`/edit/${id}`);
  }

  delete(user: IUserDetail): void {
    this.users = this.users.filter((us) => us !== user);
    this.userService.deleteUser(user.id).subscribe();
  }
}
