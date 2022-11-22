import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UuidDTO } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8080/v1/users';

  constructor(private http: HttpClient) { }

  getUuid(): Observable<UuidDTO> {
    return this.http.get<UuidDTO>(`${this.apiUrl}/uuid`);
  }

  

}




