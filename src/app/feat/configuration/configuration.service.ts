import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppInitService } from 'src/app/app-init.service';
import { Configuration } from './configuration.class';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  get url() { return `${this.init.config.baseurl}/api/configurations`; }

  constructor(
    private http: HttpClient,
    private init: AppInitService
  ) { }

  list(): Observable<Configuration[]> {
    return this.http.get(`${this.url}`) as Observable<Configuration[]>;
  }
  get(key: string): Observable<Configuration> {
    return this.http.get(`${this.url}/${key}`) as Observable<Configuration>; 
  }
  getKeys(keys: string): Observable<Configuration[]> {
    return this.http.get(`${this.url}/keys/${keys}`) as Observable<Configuration[]>; 
  }
  search(partKey: string): Observable<Configuration[]> {
    return this.http.get(`${this.url}/search/${partKey}`) as Observable<Configuration[]>; 
  }
  set(config: Configuration): Observable<any> {
    return this.http.post(`${this.url}`, config) as Observable<any>;
  }

  remove(key: string): Observable<any> {
    return this.http.post(`${this.url}/delete/${key}`, null) as Observable<any>;
  }
  remove2(key: string): Observable<any> {
    return this.http.delete(`${this.url}/${key}`) as Observable<any>;
  }
  
}
