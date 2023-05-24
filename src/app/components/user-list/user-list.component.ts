import { Component, OnInit } from '@angular/core';

import { IUserDetail } from 'src/app/models/user-detail.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit{
  users: IUserDetail[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users =>
      {
        this.userService.users=users;
        this.users=this.userService.users;
    }
      );
  }


  displayedColumns: string[] = ['id', 'name','email', 'actions'];
  editMode = false;
  editedItem: IUserDetail ;

  edit(row: IUserDetail) {
    this.editMode = true;
    this.editedItem = { ...row };
  }

  delete(id: number) {
    // Implement your delete logic here
    console.log('Delete ID:', id);
  }


  constructor(private userService: UserService) {}
}
