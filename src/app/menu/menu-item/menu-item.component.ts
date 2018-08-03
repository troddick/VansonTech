import { Component, OnInit, Input } from '@angular/core';
import { IMenuItem } from '../../Interfaces/IMenu-Items';
import { MenuService } from '../../services/menu-service.service';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: IMenuItem;
  constructor(private _menuService: MenuService, private _screenService: ScreenService) { }

  ngOnInit() {
  }

}
