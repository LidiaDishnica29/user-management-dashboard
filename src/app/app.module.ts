import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
