import { Component, Input, Output, OnInit ,EventEmitter} from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Loan } from 'src/app/loan';
import { Router } from '@angular/router';
import { HeadComponent } from 'src/app/head/head.component';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  loanList: Loan[] = [];
  user: string = "";
  role: string = "";
  token: string = "";


  constructor(private router: Router, private loanService: AuthServiceService) {
    this.user = localStorage.getItem('user') || "";
    this.role = localStorage.getItem('role') || "";
    this.token = localStorage.getItem('token') || "";
  }

  ngOnInit(): void {
    this.LogAllout();
    this.getLoan();
  }

  LoadAllLoans(): void {
    this.getLoan();
  }

  getLoan(): void {
    this.loanService.apiGetAllLoans(this.token)
      .subscribe(
        loanList => {
          this.loanList = loanList;
          console.log(loanList);
        },
        error => {
          console.log(error);
        });
  }


  Logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  LogAllout(): void {
    if (this.token == "" || null) {
      this.router.navigate(['/login']);
    }
  }

  updateEmployee(id: number){
    this.router.navigate(['/detail', id]);
  }

  searchByName(searchString: string): void {
    if(searchString.length==0){
      alert("Should not be empty.");
      return;
    }
    this.loanService.apiSearchByName(searchString,this.token)
      .subscribe(
        loans => {
          this.loanList = loans;
          console.log(loans);
        },
        error => {
          console.log(error);
        });
  }


}
