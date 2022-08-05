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
      image:
        'https://files.tecnoblog.net/wp-content/uploads/2022/03/copiar-texto-imagem-2.png',
      stars: '4.5',
      text: '"Foi muito bacana .... Quando eu comecei tinha muito medo de pegar algum projeto para fazer. hoje eu já sinto mais confiança.Agora apareceu uma oportunidade bem bacana que antes eu não teria condições de encarar".',
    },
    {
      name: 'Warner Batista',
      place: 'Presidente prudente, SP',
      image:
        'https://files.tecnoblog.net/wp-content/uploads/2022/03/copiar-texto-imagem-2.png',
      stars: '4.5',
      text: '"Foi muito bacana .... Quando eu comecei tinha muito medo de pegar algum projeto para fazer. hoje eu já sinto mais confiança.Agora apareceu uma oportunidade bem bacana que antes eu não teria condições de encarar".',
    },
    {
      name: 'Warner Batista',
      place: 'Presidente prudente, SP',
      image:
        'https://files.tecnoblog.net/wp-content/uploads/2022/03/copiar-texto-imagem-2.png',
      stars: '4.5',
      text: '"Foi muito bacana .... Quando eu comecei tinha muito medo de pegar algum projeto para fazer. hoje eu já sinto mais confiança.Agora apareceu uma oportunidade bem bacana que antes eu não teria condições de encarar".',
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
    console.log(result);

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
