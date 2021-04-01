import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})


export class CarService {

  private apiUrl: string = 'https://localhost:44308/api/cars/';

  constructor(private httpClient: HttpClient) {
  }
  
  getCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath: string = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
 }
}
