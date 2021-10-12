import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: 'create-employee', component: UserCreateComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  // {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'update-employee/:id', component:UserUpdateComponent},
  // {path: 'employee-details/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
