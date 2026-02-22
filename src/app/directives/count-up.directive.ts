import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[countUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit {
  @Input() countUp = '';
  @Input() countUpDuration = 1800;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const raw = this.countUp || (this.el.nativeElement as HTMLElement).textContent?.trim() || '0';
    const suffix = raw.replace(/[0-9]/g, '');
    const target = parseInt(raw.replace(/\D/g, ''), 10);

    const el = this.el.nativeElement as HTMLElement;
    el.textContent = '0' + suffix;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animate(el, target, suffix);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
  }

  private animate(el: HTMLElement, target: number, suffix: string) {
    const start = performance.now();
    const duration = this.countUpDuration;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
}
