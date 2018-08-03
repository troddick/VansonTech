import { IMenuItem } from "../Interfaces/IMenu-Items";


export let menuItems: Array<IMenuItem> = [
    {
        text: 'Home',
        icon: 'fa-home',
        route: '/home'
    },
    {
        text: 'About',
        icon: 'fa-info',
        route: '/about'
    },
    {
        text: 'Our Services',
        icon: 'fa-check-square',
        route: '/ourServices'
    },
    {
        text: 'Contact Us',
        icon: 'fa-envelope-square',
        route: '/contactUs'
    }

]