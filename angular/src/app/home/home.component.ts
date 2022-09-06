import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  linkSignUp = 'https://airtable.com/shrj7wn8pMzhZ4IwE';

  goTo(url: string): void {
    window.open(url, '_blank');
  }
}
