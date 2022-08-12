import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCreateComponent } from './components/loan-create/loan-create.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { HeadComponent } from 'src/app/head/head.component';

import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'loan', component:LoanListComponent},
  { path: 'loanCreate', component: LoanCreateComponent },
  { path: 'detail/:id', component: LoanDetailsComponent },
  { path: 'create', component: LoanCreateComponent },
 { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
