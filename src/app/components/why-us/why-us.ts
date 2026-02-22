import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-why-us',
  imports: [LucideAngularModule, ScrollAnimateDirective],
  templateUrl: './why-us.html',
  styles: ``,
})
export class WhyUs {
  features = [
    {
      icon: 'shield',
      title: 'Якість і гарантія',
      description: 'Тільки сертифікована продукція від перевірених виробників. Офіційна гарантія на весь асортимент.',
      accent: 'text-amber-400',
      bg: 'bg-amber-400/10',
    },
    {
      icon: 'headphones',
      title: 'Фахова консультація',
      description: 'Наші спеціалісти допоможуть підібрати оптимальне рішення для вашого проєкту та бюджету.',
      accent: 'text-blue-400',
      bg: 'bg-blue-400/10',
    },
    {
      icon: 'truck',
      title: 'Швидка доставка',
      description: "Доставка по Кам'янець-Подільському та Хмельницькій області. Зручний графік та пунктуальність.",
      accent: 'text-green-400',
      bg: 'bg-green-400/10',
    },
    {
      icon: 'wrench',
      title: 'Монтаж та сервіс',
      description: 'Послуги монтажу електрообладнання, підключення систем та гарантійне обслуговування.',
      accent: 'text-purple-400',
      bg: 'bg-purple-400/10',
    },
  ];
}
