import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  stats = [
    { value: '500+', label: 'позицій товарів' },
    { value: '8', label: 'напрямків роботи' },
    { value: '10+', label: 'років на ринку' },
    { value: '1000+', label: 'задоволених клієнтів' },
  ];

  storePhotos = [
    { src: '/images/store/store-01.jpg', alt: 'Магазин Вілен — торговий зал' },
    { src: '/images/store/store-02.jpg', alt: 'Магазин Вілен — продукція' },
    { src: '/images/store/store-03.jpg', alt: 'Магазин Вілен — освітлення' },
    { src: '/images/store/store-04.jpg', alt: 'Магазин Вілен — асортимент' },
  ];
}
