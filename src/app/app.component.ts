import { Component } from '@angular/core';
import { MenuService } from './services/menu-service.service';
import { menuItems } from './menu/menuItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _menuService: MenuService) {
    _menuService.items = menuItems

  }

  
}
