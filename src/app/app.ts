import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Brands } from './components/brands/brands';
import { Products } from './components/products/products';
import { About } from './components/about/about';
import { WhyUs } from './components/why-us/why-us';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { FloatingActions } from './components/floating-actions/floating-actions';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Brands, Products, About, WhyUs, Testimonials, Contact, Footer, FloatingActions],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
