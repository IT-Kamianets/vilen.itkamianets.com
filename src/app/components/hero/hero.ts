import { Component, OnInit, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CountUpDirective } from '../../directives/count-up.directive';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, CountUpDirective],
  templateUrl: './hero.html',
  styles: `
    .grid-pattern {
      background-image:
        repeating-linear-gradient(
          rgba(255,255,255,0.03) 0px,
          rgba(255,255,255,0.03) 1px,
          transparent 1px,
          transparent 60px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(255,255,255,0.03) 0px,
          rgba(255,255,255,0.03) 1px,
          transparent 1px,
          transparent 60px
        );
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0; }
    }

    .cursor-blink {
      animation: blink 1s step-end infinite;
      margin-left: 1px;
    }
  `,
})
export class Hero implements OnInit {
  typedLine1 = signal('');
  typedLine2 = signal('');
  cursorOnLine1 = signal(true);
  typingDone = signal(false);

  private readonly line1 = 'Магазин';
  private readonly line2 = 'Вілен';

  ngOnInit() {
    let i = 0;
    const total = this.line1.length + this.line2.length;

    setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        if (i <= this.line1.length) {
          this.typedLine1.set(this.line1.slice(0, i));
        } else {
          this.cursorOnLine1.set(false);
          this.typedLine2.set(this.line2.slice(0, i - this.line1.length));
        }
        if (i >= total) {
          clearInterval(interval);
          this.typingDone.set(true);
        }
      }, 120);
    }, 300);
  }
}
