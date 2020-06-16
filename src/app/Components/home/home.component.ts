import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderServiceService } from 'src/app/Shared/headerService/header-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(public headerService:HeaderServiceService) {
    this.headerService.BackArrow.next(false)
    this.headerService.searchButton.next(false)
    this.headerService.ExtraHeader.next(true)
    this.headerService.Toggle.next(true)
    this.headerService.brandName.next(false)

  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.headerService.BackArrow.next(true)
    this.headerService.ExtraHeader.next(false)
    this.headerService.Toggle.next(false)
    this.headerService.brandName.next(true)
  }

}
