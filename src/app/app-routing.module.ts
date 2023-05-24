import { RouterModule, Routes } from '@angular/router';

import { AddListComponent } from './components/add-list/add-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'user-add', component: AddListComponent },
  { path: 'edit/:id', component: AddListComponent },
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
