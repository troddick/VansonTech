import { IMenuItem } from "../Interfaces/IMenu-Items";


export let menuItems: Array<IMenuItem> = [
    {
        text: 'Home',
        icon: 'fa-home',
        backgroundImage: 'lake_upper',
        route: '/home'
    },
    {
        text: 'About',
        icon: 'fa-info',
        backgroundImage: 'datacenter_upper',
        route: '/about'
    },
    {
        text: 'Our Services',
        icon: 'fa-check-square',
        backgroundImage: 'clouds_upper',
        route: '/ourServices'
    },
    {
        text: 'Contact Us',
        icon: 'fa-envelope-square',
        backgroundImage: 'office_upper',
        route: '/contactUs'
    }

]