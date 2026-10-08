import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mollywoodmood } from '../models/mollywoodmood';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MollywoodmoodService {
  private baseurl = "http://localhost:8081/api/v1/mollywoodmovies_data";
    constructor(private http: HttpClient ) { }
   onsubmit():Observable<Mollywoodmood[]> {
    return this.http.get<Mollywoodmood[]>(this.baseurl);
   } 
}
