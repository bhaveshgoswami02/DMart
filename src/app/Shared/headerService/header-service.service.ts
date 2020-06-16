import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  constructor() { }
  BackArrow = new BehaviorSubject(true)
  searchButton = new BehaviorSubject(true)
  ExtraHeader = new BehaviorSubject(false)
  Toggle = new BehaviorSubject(false)
  brandName = new BehaviorSubject(true)
}
