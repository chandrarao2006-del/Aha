import { Injectable } from '@angular/core';
import { Latestreleases } from '../models/latestreleases';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchforfreeService {
   private baseurl = "assets/watchforfree.json";
    
      constructor(private http: HttpClient ) { }
     onsubmit():Observable<Latestreleases[]> {
      return this.http.get<Latestreleases[]>(this.baseurl);
     } 
}
