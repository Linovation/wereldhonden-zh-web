import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogData } from './models/dog.model';

@Injectable({ providedIn: 'root' })
export class DogService {
  private apiUrl = 'https://wereldhonden-api-demo.onrender.com/api/dogs';
  constructor(private http: HttpClient) {}
  getDogs(): Observable<DogData[]> {
    return this.http.get<DogData[]>(this.apiUrl);
  }
}