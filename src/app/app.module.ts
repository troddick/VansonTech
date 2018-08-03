import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactComponent } from './contact-us/contact.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ContentComponent } from './content/content.component';

import { appRoutes } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './services/menu-service.service';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenService } from './services/screen.service';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBodyComponent,
    HomeComponent,
    AboutComponent,
    OurServicesComponent,
    ContactComponent,
    PageNotFoundComponent,
    TitleBarComponent,
    ContentComponent,
    MenuComponent,
    ScreenBelowLarge,
    ScreenLarge,
    MenuItemComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)   
  ],

  providers: [MenuService,ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
