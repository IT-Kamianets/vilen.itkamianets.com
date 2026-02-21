import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  LucideAngularModule,
  Zap,
  Lightbulb,
  Cable,
  Camera,
  Sun,
  Flame,
  Home,
  Shield,
  Headphones,
  Truck,
  Wrench,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronRight,
  Star,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Zap,
        Lightbulb,
        Cable,
        Camera,
        Sun,
        Flame,
        Home,
        Shield,
        Headphones,
        Truck,
        Wrench,
        Phone,
        MapPin,
        Clock,
        Menu,
        X,
        ChevronRight,
        Star,
      })
    ),
  ],
};
