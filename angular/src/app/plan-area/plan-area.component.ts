import { Component } from '@angular/core';
import { IPlanArea } from './models';

@Component({
  selector: 'app-plan-area',
  templateUrl: './plan-area.component.html',
  styleUrls: ['./plan-area.component.scss'],
})
export class PlanAreaComponent {
  plans: IPlanArea[] = [
    {
      title: 'Free Plan',
      benefits: [
        'Semana do Thinker',
        'PDF dos dias da semana',
        'Acesso ao WhatsApp',
        'Acesso ao Discord',
      ],
      price: 'Free',
      priceSufix: '',
      actived: false,
    },
    {
      title: 'Standard Plan',
      benefits: [
        'Semana do Thinker',
        'PDF dos dias da semana',
        'Acesso ao WhatsApp',
        'Acesso ao Discord',
        'Acesso ao Bootcamp',
      ],
      price: 'R$147',
      priceSufix: '/ ano',
      actived: false,
    },
    {
      title: 'Premium Plan',
      benefits: [
        'Semana do Thinker',
        'PDF dos dias da semana',
        'Acesso ao WhatsApp',
        'Acesso ao Discord',
        'Acesso ao Bootcamp',
        'Mentorias Mensais',
      ],
      price: 'R$1.497',
      priceSufix: '/ ano',
      actived: true,
    },
  ];
}
