import { Component, OnInit } from '@angular/core';
import {MenuAPIService} from "../menu-api.service";
import {MenuItem} from "../menu-item"
@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
menu: MenuItem[]
  constructor(public api:MenuAPIService) { }

  ngOnInit() {
    this.api.getMenu().subscribe( (Response:MenuItem[]) =>{
      this.menu = Response
      console.log(this.menu)
    } )
    
  }

}
