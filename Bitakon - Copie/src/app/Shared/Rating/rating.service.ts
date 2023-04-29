import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rating } from 'src/app/Models/Rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http : HttpClient) { }

  
  editRating(rating: Rating){
    return this.http.put<Rating>("http://localhost:9090/ChangeStoreRating/",Rating);
  }

  addRating(rating:Rating){
    return this.http.post<Rating>("http://localhost:9090/LikeStore/",Rating);
    }

}
