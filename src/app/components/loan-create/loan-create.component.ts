import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Loan } from 'src/app/loan';
import { LoanDetailsComponent } from '../loan-details/loan-details.component';
import { HeadComponent } from 'src/app/head/head.component';


@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.css']
})
export class LoanCreateComponent implements OnInit {


  token: string = "";

  newLoan: Loan = {
    id: 0,
    loanNo: 0,
    loanDetail: '',
    loanType: '',
    uFirstName: '',
    uLastName: '',
    uEmail: '',
    uAddress: '',
    term :0,
    amount:0
  };
  

  submitted = false;
  user: string = "";
  role: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loanService: AuthServiceService
  ) {
    this.user = localStorage.getItem('user') || "";
    this.role = localStorage.getItem('role') || "";
    this.token = localStorage.getItem('token') || "";

  }

  ngOnInit(): void {
  }

  createLoan(): void {
    debugger;
    const data = {
      "id": this.newLoan.id,
      "loanNo": this.newLoan.loanNo,
      "loanDetail": this.newLoan.loanDetail,
      "loanType": this.newLoan.loanType,
      "uFirstName": this.newLoan.uFirstName,
      "uLastName": this.newLoan.uLastName,
      "uEmail": this.newLoan.uEmail,
      "uAddress": this.newLoan.uAddress,
      "term": this.newLoan.term,
      "amount": this.newLoan.amount

    };
    const loandata  = 
    {
      id: 0,
      loanNo : this.newLoan.loanNo,
      loanDetail: this.newLoan.loanDetail,
      loanType: this.newLoan.loanType,
      uFirstName: this.newLoan.uFirstName,
      uLastName: this.newLoan.uLastName,
      uEmail: this.newLoan.uEmail,
      uAddress: this.newLoan.uAddress,
      term: this.newLoan.term,
      amount: this.newLoan.amount
    };

    this.loanService.apiCreate(loandata, this.token)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }


  cancelLoan(): void {
    this.router.navigate(['/loan']);
  }


  newProduct(): void {
    this.submitted = false;
    this.newLoan = {
      id: 0,
      loanNo: 0,
      loanDetail: '',
      loanType: '',
      uFirstName: '',
      uLastName: '',
      uEmail: '',
      uAddress: '',
      term:0,
      amount:0

    };
  }
}




