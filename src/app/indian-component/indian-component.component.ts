import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indian-component',
  templateUrl: './indian-component.component.html',
  styleUrls: ['./indian-component.component.scss']
})
export class IndianComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value0:number = 0;
  value1:number = 0;
  total:number = 0;
  foods = [{"biryani":120,"fish_curry":150}];

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

  quantity(value:string,food:number){
    if(food == 0){
      this.value0 += this.calculate(value,this.value0);
    }
    else{
      this.value1 += this.calculate(value,this.value1);
    }
    
  }
}
