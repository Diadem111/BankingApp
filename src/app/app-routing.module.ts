import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DepositComponent } from './deposit/deposit.component';
import { DuplicateComponent } from './duplicate/duplicate.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TransferComponent } from './transfer/transfer.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashBoardComponent},
  {path:'duplicate', component:DuplicateComponent},
  {path:'deposit',component:DepositComponent},
  {path:'transfer',component:TransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
