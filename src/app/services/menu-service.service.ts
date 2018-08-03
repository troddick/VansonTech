import { Injectable } from '@angular/core';
import { IMenuItem } from '../Interfaces/IMenu-Items';

@Injectable()

export class MenuService {
  items: Array<IMenuItem>;
  // if true, we are on a small screen = menu should be on left side
  showingLeftSideMenu = false; 

  toggleLeftSideMenu() : void {
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }
}
