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
      stars: '4,5',
      text: '"Foi muito bacana .... Quando eu comecei tinha muito medo de pegar algum projeto para fazer. hoje eu já sinto mais confiança.Agora apareceu uma oportunidade bem bacana que antes eu não teria condições de encarar".',
    },
  ];
}
