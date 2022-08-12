import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoanCreateComponent } from './components/loan-create/loan-create.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { HeadComponent } from './head/head.component';
import {EventEmitterService} from 'src/app/event-emitter.service'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoanCreateComponent,
    LoanDetailsComponent,
    LoanListComponent,
    HeadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeadComponent,EventEmitterService]
})
export class AppModule { }
