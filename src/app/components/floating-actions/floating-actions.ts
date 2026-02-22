import { Component, HostListener, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-floating-actions',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './floating-actions.html',
})
export class FloatingActions {
  showBackToTop = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.showBackToTop.set(window.scrollY > 400);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
