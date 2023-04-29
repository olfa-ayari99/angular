import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HappyHour } from 'src/app/Models/HappyHour';

@Injectable({
  providedIn: 'root'
})
export class HappyHourService {

  HappyHourUrl = "http://localhost:9090/api/happyHour/is-happy-hour-now";
  constructor(private http : HttpClient) { }
  getHappyHour() : Observable<HappyHour[]>{
    return this.http.get<HappyHour[]>(this.HappyHourUrl);
  }

  addHappyHour(happyHour:HappyHour){
    return this.http.post<HappyHour>("http://localhost:9090/api/happyHour/schedule",HappyHour);
    }

  deleteHappyHourById(id:number){
    return this.http.delete<HappyHour>("http://localhost:9090/api/happyHour/cancel/"+id);
    }  

}
