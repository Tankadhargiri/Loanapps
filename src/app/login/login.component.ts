import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  loginProcess() {
    debugger;
    if (this.formGroup.valid) {
      this.authService.apiLogin(this.formGroup.value).subscribe(result => {
        if (result.status == 1) {
          console.log(result);
          localStorage.setItem('user', result.userName);
          localStorage.setItem('role', result.role);
          localStorage.setItem('token', result.token);
          this.router.navigate(['/loan']);
        }
        else {
          alert('Invalid Credential.');
          this.formGroup.setValue({username: '', password: ''});
          
        }
      })
    }
  }
}
