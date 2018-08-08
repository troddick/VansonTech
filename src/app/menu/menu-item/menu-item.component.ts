import { Component, OnInit, Input, ChangeDetectorRef  } from '@angular/core';
import { IMenuItem } from '../../Interfaces/IMenu-Items';
import { MenuService } from '../../services/menu-service.service';
import { ScreenService } from '../../services/screen.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: IMenuItem;
  private _titlebackgroundImageSub = Subscription;

  constructor(private _menuService: MenuService, private _screenService: ScreenService) { }

  ngOnInit() {        
  }

  setStuff(): void {
    this._menuService.showingLeftSideMenu=false;
    this._menuService.titleBackgroundImage = this.item.backgroundImage;
    //this._cdref.detectChanges(); 
  }

}
