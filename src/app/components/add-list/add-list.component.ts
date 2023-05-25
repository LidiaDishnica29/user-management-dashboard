import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private userService: UserService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.validForm();
  }
  //validate form
  validForm() {
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
  //save user
  onSaveUser(): void {
    if (this.userListForm.valid) {
      this.userDetail = this.userListForm.value;
      this.userService.addUsers(this.userDetail).subscribe((user) => {
        this.userService.users.push(user);
        this.userListForm.reset();
        this.goBack();
      });
    }
  }
  //navigate back to list
  goBack(): void {
    this.route.navigateByUrl('/user-list');
  }
}
