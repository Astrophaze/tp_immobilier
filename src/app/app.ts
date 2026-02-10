import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './component/header-component/header-component';
import { QuiSommesNousComponent } from './component/qui-sommes-nous-component/qui-sommes-nous-component';
import { NosBureauxComponent } from './component/nos-bureaux-component/nos-bureaux-component';
import { FooterComponent } from './component/footer-component/footer-component';
import { AuthService } from './services/auth-service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private router = inject(Router);
  isHome = signal(true); 

  constructor(private authService: AuthService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHome.set(event.urlAfterRedirects === '/' || event.urlAfterRedirects === '');
    });

    this.authService.fetchJwtToken().subscribe();
  }
}