import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu-service.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  currentTitleImg: string;

  constructor(private _screenService: ScreenService, private _menuService: MenuService) { 
  }

  ngOnInit() {
    this.currentTitleImg = 'lake_upper';
    this._menuService.titleBackgroundImage.subscribe((imageName: string) => {
      this.currentTitleImg = imageName;
    });
  }

}
