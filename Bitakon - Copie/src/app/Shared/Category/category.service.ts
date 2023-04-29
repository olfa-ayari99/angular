import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }
  addCategory(category:Category){
    return this.http.post<Category>("http://localhost:9090/create",category);
    }

    categoryUrl = "http://localhost:9090/getAllCategorys";
  getCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryUrl);
  }

  deleteCategoryById(id:number){
    return this.http.delete<Category>("http://localhost:9090/delete/"+id);
    } 
    
    editCategory(category: Category){
      return this.http.put<Category>("http://localhost:9090/update",category);
    }

    getCategoryById(id: number): Observable<Category>{
      return this.http.get<Category>("http://localhost:9090/getCategoryById/"+id);
    } 
}
