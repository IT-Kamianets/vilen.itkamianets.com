import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  isScrolled = false;
  isMobileMenuOpen = false;
  scrollProgress = signal(0);
  activeSection = signal('');
  isOpen = signal(false);

  private readonly sections = ['products', 'about', 'why-us', 'contact'];

  constructor() {
    this.updateOpenStatus();
    setInterval(() => this.updateOpenStatus(), 60_000);
  }

  private updateOpenStatus() {
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 1=Mon … 6=Sat
    const minutes = now.getHours() * 60 + now.getMinutes();

    if (day >= 1 && day <= 5) {
      this.isOpen.set(minutes >= 9 * 60 && minutes < 18 * 60);
    } else if (day === 6) {
      this.isOpen.set(minutes >= 9 * 60 && minutes < 16 * 60);
    } else {
      this.isOpen.set(false);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(total > 0 ? (scrolled / total) * 100 : 0);
    this.isScrolled = scrolled > 80;
    this.updateActiveSection();
  }

  private updateActiveSection() {
    for (const id of [...this.sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        this.activeSection.set(id);
        return;
      }
    }
    this.activeSection.set('');
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
