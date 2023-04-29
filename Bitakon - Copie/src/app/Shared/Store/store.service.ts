import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from 'src/app/Models/Store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  storeUrl = "http://localhost:9090/api/store/get_all_Stores";
  constructor(private http : HttpClient) { }
  getStores() : Observable<Store[]>{
    return this.http.get<Store[]>(this.storeUrl);
  }

  editStore(Store: Store){
    return this.http.put<Store>("http://localhost:9090/api/store/updateStore",Store);
  }

  addStore(Store:Store){
    return this.http.post<Store>("http://localhost:9090/api/store/addStore",Store);
    }

  deleteStoreById(id:number){
    return this.http.delete<Store>("http://localhost:9090/api/store/deleteStore/"+id);
    } 
}
