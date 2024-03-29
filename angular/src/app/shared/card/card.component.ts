import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() name = '';
  @Input() place = '';
  @Input() image = '';
  @Input() stars = '0';
  @Input() text = '';
  @Input() isActived = false;
}
