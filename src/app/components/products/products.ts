import { Component } from '@angular/core';
import { ProductCard } from './product-card/product-card';
import { ProductCategory } from '../../models/product.model';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styles: ``,
})
export class Products {
  categories: ProductCategory[] = [
    {
      id: 1,
      title: 'Електротовари',
      description: 'Розетки, вимикачі, автомати захисту, щитки та комплектуючі провідних виробників.',
      icon: 'zap',
      accent: 'text-amber-400',
      image: '/images/categories/electrical.webp',
    },
    {
      id: 2,
      title: 'Світильники',
      description: 'LED-освітлення, люстри, споти, вуличні ліхтарі та декоративне підсвічування.',
      icon: 'lightbulb',
      accent: 'text-yellow-400',
      image: '/images/categories/lighting.webp',
    },
    {
      id: 3,
      title: 'Кабельна продукція',
      description: 'Проводи, кабелі, кабельні канали та гофра для будь-яких завдань монтажу.',
      icon: 'cable',
      accent: 'text-blue-400',
      image: '/images/categories/cable.webp',
    },
    {
      id: 4,
      title: 'Відеоспостереження',
      description: 'IP-камери, реєстратори, аналогові системи та готові комплекти спостереження.',
      icon: 'camera',
      accent: 'text-green-400',
      image: '/images/categories/camera.webp',
    },
    {
      id: 5,
      title: 'Сонячні панелі',
      description: 'Фотоелектричні модулі, інвертори, акумулятори та повні рішення для сонячної енергетики.',
      icon: 'sun',
      accent: 'text-orange-400',
      image: '/images/categories/solar.webp',
    },
    {
      id: 6,
      title: 'Системи опалення',
      description: 'Електричні конвектори, тепловентилятори, теплі підлоги та терморегулятори.',
      icon: 'flame',
      accent: 'text-red-400',
      image: '/images/categories/heating.webp',
    },
    {
      id: 7,
      title: '«Розумний будинок»',
      description: 'Автоматизація освітлення, клімату, безпеки та керування голосом/смартфоном.',
      icon: 'home',
      accent: 'text-purple-400',
      image: '/images/categories/smart-home.webp',
    },
    {
      id: 8,
      title: 'Охоронні системи',
      description: 'Сигналізація, датчики руху, контроль доступу та системи оповіщення.',
      icon: 'shield',
      accent: 'text-cyan-400',
      image: '/images/categories/security.webp',
    },
  ];
}
