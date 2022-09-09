import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  isActive = (route: string): boolean => location.href.includes(route);  

  data: Data = new Date();
  year: number = this.data['getFullYear']();

  linkSignUp = 'https://airtable.com/shrj7wn8pMzhZ4IwE';
  linkThinkAM = 'https://thinkam.net'
  linkDiscord = 'https://discord.gg/mqR7r8pUp9'

}
