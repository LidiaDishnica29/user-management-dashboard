import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IUserDetail } from 'src/app/models/user-detail.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css'],
})
export class EditListComponent implements OnInit {
  userListForm!: FormGroup;
  user: IUserDetail | undefined;
  id: number;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserById();
    this.validate();
  }
  validate() {
    this.userListForm = new FormGroup({
      name: new FormControl(this.user?.name, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(this.user?.email, [
        Validators.email,
        Validators.required,
      ]),
    });
  }
  getUserById(): void {
    //get from route the id
    this.router.paramMap.subscribe((params) => {
      this.id = +params.get('id')!;
    });
    this.userService.getUserById(this.id).subscribe((user) => {
      this.user = user;
    });
  }
  //save user
  save(): void {
    if (this.user) {
      this.userService.updateUser(this.user).subscribe(() => {});
      this.goBack();
    }
  }

  goBack(): void {
    this.route.navigateByUrl('/user-list');
  }
}
