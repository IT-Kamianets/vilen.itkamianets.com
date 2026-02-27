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
      name: 'Павло Д.',
      rating: 3,
      text: 'Зависокі ціни для камер спостереження. Хотілось би більше українських виробників, а не Китаю. Хоча спеціалісти гарні, фахівці своєї справи і порекомендували те, що потрібно було.',
      date: 'Google Maps',
    },
    {
      name: 'Geron Zai',
      rating: 5,
      text: 'Дуже давно працюємо із цим магазином. Все що стосується електрики та освітлення у них є! А якщо ні, то завтра підвезуть! Завжди підкажуть, що вибрати правильно. Пояснюючи все по суті, без води та реклами постачальників. Щоразу приємно сюди заходити.',
      date: 'Google Maps',
    },
    {
      name: 'Елена Макарова',
      rating: 5,
      text: 'Величезний асортимент, доступні ціни, кваліфікований персонал, що надає вичерпні консультації, післягарантійний супровід та можливість оперативно замовити потрібне саме тобі — що може бути краще? Дякую ВІЛЕН — Віктору та Олені — за професіоналізм!',
      date: 'Google Maps',
    },
    {
      name: 'Vladyslav Shafinskyi',
      rating: 5,
      text: 'Віктор завжди підскаже, допоможе. Якщо щось не так, повертають гроші без проблем. По гарантії міняють. Рекомендую!',
      date: 'Google Maps',
    },
    {
      name: 'Nick Komarnitsky',
      rating: 5,
      text: 'Не перший раз купую світлотехніку тут, помірні ціни + хороші продавці = розумна покупка необхідних речей. Рекомендую.',
      date: 'Google Maps',
    },
  ];
}
