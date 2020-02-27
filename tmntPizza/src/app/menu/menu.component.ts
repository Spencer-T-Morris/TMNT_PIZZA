import { Component, OnInit } from '@angular/core';
import {MenuAPIService} from '../menu-api.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public service: MenuAPIService) { }
  menu : any[] = []

  ngOnInit() {
    this.getMenu()
  }
  getMenu() {
    this.service.getMenu().subscribe( (menu : any) => {
      console.log(menu);
      this.menu = menu;
    });
  }

}
