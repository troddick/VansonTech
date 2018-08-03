import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu-service.service';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _menuService: MenuService, private _screenService: ScreenService) { }

  ngOnInit() {
  }
  
}
