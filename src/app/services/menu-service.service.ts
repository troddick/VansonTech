import { Injectable } from '@angular/core';
import { IMenuItem } from '../Interfaces/IMenu-Items';
import { Subject } from 'rxjs';

@Injectable()

export class MenuService {
  items: Array<IMenuItem>;
  // if true, we are on a small screen = menu should be on left side
  showingLeftSideMenu = false; 
  backgroundImage: Subject<string> = new Subject<string>();

  public set titleBackgroundImage(imageName:any){
    this.backgroundImage.next(imageName);
  }
  //show the filter modal in the mainview
  public get titleBackgroundImage():any{
      return this.backgroundImage.asObservable();
  }
  toggleLeftSideMenu() : void {
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }
}
