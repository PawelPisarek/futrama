import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'futurama-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <futurama-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </futurama-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
