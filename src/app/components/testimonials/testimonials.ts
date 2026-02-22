import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './testimonials.html',
})
export class Testimonials {
  reviews = [
    {
      name: 'Олексій Мороз',
      rating: 5,
      text: 'Відмінний магазин! Знайшов усе необхідне для підключення сонячних панелей. Консультанти дуже компетентні — все пояснили і підібрали оптимальне рішення.',
      date: 'Листопад 2024',
    },
    {
      name: 'Тетяна Василенко',
      rating: 5,
      text: 'Швидке обслуговування, великий асортимент. Купила LED-освітлення для всього будинку — дуже задоволена якістю та ціною.',
      date: 'Грудень 2024',
    },
    {
      name: 'Ігор Савченко',
      rating: 5,
      text: 'Замовляв монтаж системи відеоспостереження. Зробили швидко і якісно. Ціни чесні, без зайвих накруток. Рекомендую!',
      date: 'Жовтень 2024',
    },
    {
      name: 'Наталія Приходько',
      rating: 5,
      text: 'Дуже приємний персонал. Допомогли підібрати терморегулятор і теплу підлогу для ванної. Завжди раді допомогти з будь-яким питанням.',
      date: 'Вересень 2024',
    },
  ];
}
