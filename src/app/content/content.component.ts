import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu-service.service';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private _menuService: MenuService, private _screenService: ScreenService) { }

  ngOnInit() {
  }

}
