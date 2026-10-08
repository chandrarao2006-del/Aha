import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Latestreleases } from '../models/latestreleases';

@Injectable({
  providedIn: 'root'
})
export class LatestreleasesService {
  private baseurl="http://localhost:8081/api/v1/latestreleases_data";
  private baseurl1="http://localhost:8081/api/v1/latestreleases";
  constructor(private http:HttpClient) {}
  onsubmit():Observable<Latestreleases[]> {
   return this.http.get<Latestreleases[]>(this.baseurl);
  }
}