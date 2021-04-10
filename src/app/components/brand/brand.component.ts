import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  
  brands: Brand[] = [];
  filterText: string = '';
  currentBrand:Brand;
  dataLoaded=false;

  constructor(private brandService: BrandService) {
  }

  ngOnInit(): void {
     this.getBrands();
  }

  getBrands() {
     this.brandService.getBrands().subscribe((response) => {
        this.brands = response.data;
        this.dataLoaded= true;
     });
  }
  setCurrentBrand(brand:Brand){
     this.currentBrand  = brand;
     console.log(brand.name)
  }
  getCurrentBrandClass(brand: Brand) {
   if (brand == this.currentBrand) {
     return 'list-group-item active';
   } else {
     return 'list-group-item';
   }
 }
 getAllCars(){
   if(!this.currentBrand){
    return 'btn-danger';
  } else {
    return 'btn';
  }

 }
}
