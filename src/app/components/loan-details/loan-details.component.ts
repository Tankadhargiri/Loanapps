import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/loan';
import { HeadComponent } from 'src/app/head/head.component';


@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  loanId:number= 0;
  token: string = "";

  oldLoan: Loan = {
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

  submitted = false;
  user: string = "";
  role: string = "";
  loanIds: number=0 ; 


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
    this.loanId = this.route.snapshot.params['id'];
    localStorage.setItem('loanIds', this.loanId?.toString() || '');
   
    this.loanService.apiSearchByName(this.loanId,this.token).subscribe(data => {
    this.oldLoan = data[0];
    }, error => console.log(error));
  }

  cancelLoan(): void {
    this.router.navigate(['/loan']);
  }

  updateLoan(): void {
    this.oldLoan.id = Number(localStorage.getItem('loanIds'));

    const loandata = 
    {
      id:  this.oldLoan.id,
      loanNo : this.oldLoan.loanNo,
      loanDetail: this.oldLoan.loanDetail,
      uFirstName: this.oldLoan.uFirstName,
      uLastName: this.oldLoan.uLastName,
      uEmail: this.oldLoan.uEmail,
      term:this.oldLoan.term,
      amount:this.oldLoan.amount
    };

    this.loanService.apiUpdate(loandata,this.token)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  firstFunction() {    
    alert( 'Hello ' + '\nWelcome \nFunction in Loan Components');    
  }   
}
