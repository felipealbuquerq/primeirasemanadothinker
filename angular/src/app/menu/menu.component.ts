import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  show: any;

  linkSignUp = 'https://airtable.com/shrj7wn8pMzhZ4IwE';

  isActive = (route: string): boolean => location.href.includes(route);  
}
