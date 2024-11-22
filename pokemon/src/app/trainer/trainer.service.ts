import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private readonly baseUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon';

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/trainers.json`);
  }

  getTrainerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/trainers/${id}.json`);
  }  
}

