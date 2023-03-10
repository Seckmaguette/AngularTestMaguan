import { UserFilsComponent } from './user-list/user-fils/user-fils.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"userlist", component: UserListComponent},
  {path:"user/:id",component: UserFilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
