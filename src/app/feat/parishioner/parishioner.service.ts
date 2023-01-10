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
}
