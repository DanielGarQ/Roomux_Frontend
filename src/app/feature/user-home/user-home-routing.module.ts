import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';


const routes: Routes = [
  { path: "", component:UserHomeComponent, children: [
    {path: "", component:ReservationListComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserHomeRoutingModule { }
