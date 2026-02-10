import { Component } from '@angular/core';
import { QuiSommesNousComponent } from '../qui-sommes-nous-component/qui-sommes-nous-component';
import { NosBureauxComponent } from '../nos-bureaux-component/nos-bureaux-component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuiSommesNousComponent, NosBureauxComponent],
  template: `
    <app-qui-sommes-nous-component></app-qui-sommes-nous-component>
    <app-nos-bureaux-component></app-nos-bureaux-component>
  `
})
export class HomeComponent {}