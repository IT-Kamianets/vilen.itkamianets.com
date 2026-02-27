import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  standalone: true,
  templateUrl: './brands.html',
  styles: `
    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .marquee-track {
      animation: marquee 28s linear infinite;
      width: max-content;
    }
  `,
})
export class Brands {
  brands = [
    'Schneider Electric', 'Legrand', 'Philips', 'ABB',
    'Osram', 'IEK', 'АСКО-УКРЕМ', 'Hikvision',
    'Dahua', 'Hager', 'Chint', 'Bosch',
  ];
}
