import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  currentYear = new Date().getFullYear();

  links = [
    { label: 'Категорії', href: '#products' },
    { label: 'Про нас', href: '#about' },
    { label: 'Переваги', href: '#why-us' },
    { label: 'Контакти', href: '#contact' },
  ];
}
