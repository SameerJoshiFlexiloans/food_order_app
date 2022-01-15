import { Component, Input, OnInit } from '@angular/core';
import { foodCard } from '../food.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})

export class FoodCardComponent implements OnInit {

  constructor() { }

  @Input() food!:foodCard;
  
  ngOnInit(): void {
    
  }
  
  calculate(value:string,real:number){
      if(value == '-'){
        if(real <= 0){
          return 0;
        }
        else{
          return -1
        }
      }
      else{
        return +1;
      }
    }
    quantity(value:string){
      this.food.quantity += this.calculate(value,this.food.quantity);
      this.food.amount = this.food.quantity*this.food.price;
    }
}
