import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppInitService } from 'src/app/app-init.service';
import { Parishioner } from './parishioner.class';


@Injectable({
  providedIn: 'root'
})
export class ParishionerService {
  
  get url() { return `${this.init.config.baseurl}/api/parishioners`; }
  
  parishionerStatuses = [
    { value: "", display: "Select" },
    { value: "A", display: "A - Yes" },
    { value: "B", display: "B - No, next year" },
    { value: "X", display: "X - No" }
  ]

  ministries = [
    "Committee",
    "Education",
    "Finance",
    "Pastoral",
    "Parishioner",
    "Social Action",
    "Stewardship",
    "Faith Formation"
  ]

  constructor(
    private http: HttpClient,
    private init: AppInitService
  ) { }

  callers(): Observable<Parishioner[]> {
    return this.http.get(`${this.url}/callers`) as Observable<Parishioner[]>;
  }

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

  addCallerNames(parishioners: Parishioner[]): void {
    for(let parishioner of parishioners) {
      this.addCallerName(parishioner);
    }
  }
  addCallerName(parishioner: Parishioner): void {
    parishioner.callerName = (parishioner.caller !== null) 
        ? parishioner.caller.firstname + ' ' + parishioner.caller.lastname 
        : '';
}
}