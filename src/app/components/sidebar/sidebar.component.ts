import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.menuItems = [
      new MenuItem(1, "Locais", "/pontos/listar", 'beenhere'),
      new MenuItem(2, "Mapa", "/map", 'place'),
    ]}
}
