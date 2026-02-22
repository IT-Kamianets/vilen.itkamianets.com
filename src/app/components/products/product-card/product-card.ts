import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ProductCategory } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [LucideAngularModule],
  templateUrl: './product-card.html',
  styles: `
    .tilt-card {
      transform-style: preserve-3d;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      will-change: transform;
    }
  `,
})
export class ProductCard {
  @Input({ required: true }) category!: ProductCategory;

  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -6;
    const rotateY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  }

  onMouseLeave(event: MouseEvent) {
    (event.currentTarget as HTMLElement).style.transform = '';
  }
}
