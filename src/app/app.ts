import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Products } from './components/products/products';
import { About } from './components/about/about';
import { WhyUs } from './components/why-us/why-us';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Products, About, WhyUs, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
