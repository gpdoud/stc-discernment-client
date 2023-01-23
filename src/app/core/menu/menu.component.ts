import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    // new Menu("STC", "/home"),
    new Menu("Parishioners", "/parishioners/list"),
    new Menu("Reviews", "/parishioners/review"),
    // new Menu("About", "/about"),
    new Menu("Help", "/help")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
