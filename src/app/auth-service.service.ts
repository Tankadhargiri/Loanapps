import { HttpClient, HttpClientModule ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:35208/api';


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  constructor(private httpClient: HttpClient) { }

  apiLogin(data): Observable<any> {
    return this.httpClient.post(baseURL+'/Login', data);
  }

  apiGetAllLoans(token): Observable<any> {
    const header = new HttpHeaders({ 'Authorization': `Bearer ${token}`});
    const options = {headers: header };
    return this.httpClient.get(baseURL+'/Loan/All',options);
  }

  apiCreate(data,token): Observable<any> {
    // const headers = new HttpHeaders().append('Content-Type' , 'application/json');
    const header = new HttpHeaders({ 'Authorization': `Bearer ${token}`});
    const options = {headers: header };
    return this.httpClient.post(baseURL +'/Loan', data, options);
  }

  apiUpdate(data,token): Observable<any> {
    const header = new HttpHeaders({ 'Authorization': `Bearer ${token}`});
    const options = {headers: header };
    return this.httpClient.put(`${baseURL+'/Loan'}`, data,options);
  }

  apiSearchByName(name,token): Observable<any> {
    const header = new HttpHeaders({ 'Authorization': `Bearer ${token}`});
    const options = {headers: header };
    return this.httpClient.get(`${baseURL+'/Loan/Names'}?searchString=${name}`,options);
  }
  
}
