import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddListComponent } from './components/add-list/add-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

// const appRoutes: Routes = [
//   {
//     path: '',
//     component: UserDashboardComponent,
//     children: [
//       { path: 'user-list', component: UserListComponent },
//       { path: 'user-add', component: AddListComponent },
//       { path: '', redirectTo: '/', pathMatch: 'full' },
//     ],
//   },
// ];

const appRoutes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'user-add', component: AddListComponent },
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
