import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ProductCategory } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [LucideAngularModule],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
  @Input({ required: true }) category!: ProductCategory;
}
