import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
  styles: ``,
})
export class Contact {
  mapsUrl: SafeResourceUrl;

  contacts = [
    {
      icon: 'map-pin',
      label: 'Адреса',
      value: 'просп. Грушевського, 32\nКам\'янець-Подільський, 32301',
      accent: 'text-blue-400',
      bg: 'bg-blue-400/10',
    },
    {
      icon: 'phone',
      label: 'Телефон',
      value: '+38 (067) 255-02-51',
      accent: 'text-amber-400',
      bg: 'bg-amber-400/10',
    },
    {
      icon: 'clock',
      label: 'Години роботи',
      value: 'Пн–Пт: 9:00–18:00\nСб: 9:00–16:00\nНд: вихідний',
      accent: 'text-green-400',
      bg: 'bg-green-400/10',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.mapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=48.684589,26.591684&z=17&t=m&output=embed'
    );
  }
}
