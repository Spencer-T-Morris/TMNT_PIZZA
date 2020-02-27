import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  constructor() { }

  @Input() item : MenuItem;

  ngOnInit() {

    
  }

}
