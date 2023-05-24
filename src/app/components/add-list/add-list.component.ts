import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IUserDetail } from 'src/app/models/user-detail.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
})
export class AddListComponent implements OnInit {
  userListForm!: FormGroup;
  userDetail: IUserDetail;

  constructor(private userService: UserService) {
    this.userDetail = {} as IUserDetail;
  }

  ngOnInit(): void {
    this.userListForm = new FormGroup({
      name: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl<string>('', [
        Validators.email,
        Validators.required,
      ]),
    });
  }

  onSaveUser(): void {
    debugger;
    this.userDetail = this.userListForm.value;
    this.userService.addUsers(this.userDetail).subscribe(user=>this.userService.users.push(user));

    this.userListForm.reset();
  }

}
