import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from 'src/app/Shared/headerService/header-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(public headerService:HeaderServiceService) {
    this.headerService.BackArrow.next(true)
    this.headerService.searchButton.next(true)
    this.headerService.ExtraHeader.next(false)
    this.headerService.Toggle.next(false)
    this.headerService.brandName.next(true)

   }

  ngOnInit(): void {
  }

}
