import { Observable, combineLatest, map } from 'rxjs';

import { Component } from '@angular/core';
import { IUserDetail } from 'src/app/models/user-detail.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  loadAllResult$ = this.userService.loadAllUserResult$;
  userDetail$  = this.userService.userDetail$;

  userListResult$: Observable<IUserDetail[]> = this.loadAllResult$.pipe(
    map((userDetailList) =>
      userDetailList.filter((userDetailList: IUserDetail) =>
        `${userDetailList.name} ${userDetailList.email}`.toLowerCase()
      )
    )
  );

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

 generalUserList$ = combineLatest([this.userListResult$, this.userDetail$]).pipe(
  map(([userList, addedUsers]) => [...userList, addedUsers])
 )
  constructor(private userService: UserService) {}
}
