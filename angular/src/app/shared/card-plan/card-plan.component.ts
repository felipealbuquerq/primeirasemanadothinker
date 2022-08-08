import { Component, Input } from '@angular/core';
import { IPlanArea } from 'src/app/plan-area/models';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.scss'],
})
export class CardPlanComponent {
  @Input() item: IPlanArea = {
    title: '',
    benefits: [],
    price: '',
    priceSufix: '',
    actived: false,
  };
}
