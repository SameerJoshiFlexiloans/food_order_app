import { Component, OnInit } from '@angular/core';
import { foodCard } from '../food.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-maxican-component',
  templateUrl: './maxican-component.component.html',
  styleUrls: ['./maxican-component.component.scss']
})
export class MaxicanComponentComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  httpValue!:any;
  foods!:Array<foodCard>;
  ngOnInit(): void {
    this.menuService.getDataValues('maxican').subscribe(value=>{
      this.httpValue = value;
      this.foods = this.httpValue.data;
    });
  }
}
