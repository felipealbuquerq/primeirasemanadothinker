import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  data: Data = new Date();
  year: number = this.data['getFullYear']();

}
