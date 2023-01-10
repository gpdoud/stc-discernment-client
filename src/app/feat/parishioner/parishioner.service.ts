import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parishioner } from './parishioner.class';

@Injectable({
  providedIn: 'root'
})
export class ParishionerService {

  url = "http://localhost:5000/api/parishioners";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Parishioner[]> {
    return this.http.get(`${this.url}`) as Observable<Parishioner[]>;
  }

  get(id: number): Observable<Parishioner> {
    return this.http.get(`${this.url}/${id}`) as Observable<Parishioner>;
  }
  
  create(parishioner: Parishioner): Observable<Parishioner> {
    return this.http.post(`${this.url}`, parishioner) as Observable<Parishioner>;
  }

  change(parishioner: Parishioner): Observable<any> {
    return this.http.put(`${this.url}/${parishioner.id}`, parishioner) as Observable<any>;
  }
  
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}