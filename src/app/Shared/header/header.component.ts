import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../headerService/header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  BackArrow
  searchButton
  ExtraHeader
  Toggle
  brandName
  constructor(public headerService:HeaderServiceService) { 
    this.headerService.BackArrow.subscribe(res=>{
      this.BackArrow = res
    })
    this.headerService.searchButton.subscribe(res=>{
      this.searchButton = res
    })
    this.headerService.ExtraHeader.subscribe(res=>{
      this.ExtraHeader = res
    })
    this.headerService.Toggle.subscribe(res=>{
      this.Toggle = res
    })
    this.headerService.brandName.subscribe(res=>{
      this.brandName = res
    })
  }

  ngOnInit(): void {
  }

}