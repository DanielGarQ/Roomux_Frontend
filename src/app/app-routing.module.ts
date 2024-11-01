import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./feature/login/login/login.component";
import { RegisterComponent } from "./feature/login/register/register/register.component";

export const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"user-home", loadChildren: () => import('./feature/user-home/user-home.module').then(module => module.UserHomeModule)},
  {path:'**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
