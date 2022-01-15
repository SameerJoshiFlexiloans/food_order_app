import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  authenticate(email:string,pass:string):boolean{
    if(sessionStorage.getItem(email) == pass){
      return true;
    }
    else{
      return false;
    }
  }
}
export interface userInfo{
  username:string,
  password:string
}

export interface foodCard{
  type:string,
  price:number,
  description:string
  image:string,
  amount:number,
  foodType:string,
  quantity:number
}

export interface menu{
  indian: [foodCard],
  maxican: [foodCard]
};