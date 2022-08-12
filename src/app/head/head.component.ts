import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from '../event-emitter.service';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  user:string = "" ; 
  role:string = "" ; 
  token:string = "" ; 



  constructor(private router: Router, private eventEmitterService: EventEmitterService ) {
    this.user= localStorage.getItem('user') ||"";
    this.role= localStorage.getItem('role') ||"";
    this.token= localStorage.getItem('token') ||"";

   }

   firstComponentFunction(){    
    this.eventEmitterService.onFirstComponentButtonClick();    
  } 

  ngOnInit(): void {
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.headFunction();    
      });    
    }    
  }

  Logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  NewLoan(): void{
    if(this.role=="Admin")
    {
      this.router.navigate(['/loanCreate']);
    }
    else
    {
      alert("Unauthorized to create loan, Please contact Admin.")
    }

  }

  GotoHome():void{
    this.router.navigate(['/loan']);
    this.eventEmitterService.onFirstComponentButtonClick();
  }
  headFunction() {    
      
  }  

}
