import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact-us/contact.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }, 
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contactUs',
        component: ContactComponent
    },
    {
        path: 'ourServices',
        component: OurServicesComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]