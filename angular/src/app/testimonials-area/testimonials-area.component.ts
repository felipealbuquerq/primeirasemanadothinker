import { Component } from '@angular/core';
import { ITestimonial } from './models';

@Component({
  selector: 'app-testimonials-area',
  templateUrl: './testimonials-area.component.html',
  styleUrls: ['./testimonials-area.component.scss'],
})
export class TestimonialsAreaComponent {
  testimonialIndex = 0;

  testimonials: ITestimonial[] = [
    {
      name: 'Warner Batista',
      place: 'Presidente prudente, SP',
      image: 'https://ca.slack-edge.com/T2CSA6T8F-U01JS2G94MP-c75c400ebfa5-512',
      stars: '4.5',
      text: '"Foi muito bacana .... Quando eu comecei tinha muito medo de pegar algum projeto para fazer. hoje eu já sinto mais confiança.Agora apareceu uma oportunidade bem bacana que antes eu não teria condições de encarar".',
    },
    {
      name: 'Camila Marques',
      place: 'São José dos Campos, SP',
      image: 'https://i.ibb.co/m092Y1J/image.png',
      stars: '4.5',
      text: '"Como eu estava em transição de carreira eu tinha medo de pegar um projeto enorme,e hoje eu vejo que são vários passos,e de pouco a pouco o projeto está pronto".',
    },
    {
      name: 'Érica Sene ',
      place: 'Presidente prudente, SP',
      image: 'https://ca.slack-edge.com/T2CSA6T8F-U3A05PRRD-ffd4997aba4c-512',
      stars: '4.5',
      text: '"Eu sentia muito a sindrome do impostor, por mais que fizesse o trabalho eu não imaginava que estava agregando valor o bastante,e hoje consigo enxergar a diferença que consigo fazer em um projeto.".',
    },
  ];

  handleNavigation(value: number, type: 'exact' | 'default' = 'default') {
    if (type === 'exact') {
      this.testimonialIndex = value;
      this.moveCard();
      return;
    }
    const result = Math.min(
      Math.max(this.testimonialIndex + value, 0),
      this.testimonials.length - 1
    );
    this.testimonialIndex = result;
    this.moveCard();
  }

  moveCard() {
    const card = document.querySelector('#card-item') as HTMLElement;
    const cartMove = document.querySelector('.card-items') as HTMLElement;

    const marginRight = parseInt(getComputedStyle(card).marginRight);
    const width = card.offsetWidth;
    const offSet = this.testimonialIndex * (marginRight + width);
    cartMove.style.transform = `translateX(-${offSet}px)`;
  }
}
