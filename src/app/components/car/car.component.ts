import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetails:CarDetail[] = []


  constructor(private carService: CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if(params["brandName"]){
          this.getCarsByBrands(params["brandName"])
        }else if(params["colorName"]){
          this.getCarsByColor(params["colorName"])
        }else{
          this.getCarDetails();
        }
      })  
    }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response => {
      this.carDetails = response.data
    })
  }

  getCarsByBrands(brandName:string){
    this.carService.getCarDetailsByBrand(brandName).subscribe(response => {
      this.carDetails = response.data
    })
  }
  getCarsByColor(colorName:string){
    this.carService.getCarDetailsByColor(colorName).subscribe(response => {
      console.log(response.data)
      this.carDetails = response.data
    })
  }


}
