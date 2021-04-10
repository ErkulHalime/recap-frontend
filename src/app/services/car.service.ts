import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})


export class CarService {

  private apiUrl: string = 'https://localhost:44308/api/cars';

  constructor(private httpClient: HttpClient) {
  }
  
  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(
      `${this.apiUrl}/getall`
    );
  }

  getCarById(carId: number): Observable<SingleResponseModel<Car>> {
    return this.httpClient.get<SingleResponseModel<Car>>(
      `${this.apiUrl}/getbyid?id=${carId}`
    );
  }

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiUrl}/getcardetails`
    );
  }

  getCarDetailsByBrand(
    brandName: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiUrl}/getcardetailsbybrandname?name=${brandName}`
    );
  }

  getCarDetailsByColor(
    colorName: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiUrl}/getcardetailsbycolorname?name=${colorName}`
    );
  }

  getCarDetailsByBrandNameAndColorName(
    brandName: string,
    colorName: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiUrl}/getcardetailsbybrandnameandcolorname?brandName=${brandName}&colorName=${colorName}`
    );
  }

  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiUrl}/add`,
      car
    );
  }

  update(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiUrl}/update`,
      car
    );
  }

  delete(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiUrl}/delete`,
      car
    );
  }
}
