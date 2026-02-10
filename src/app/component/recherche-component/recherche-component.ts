import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheService } from '../../services/recherche-service';

@Component({
  selector: 'app-recherche-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recherche-component.html',
  styleUrl: './recherche-component.scss',
})
export class RechercheComponent {
  rechercheService = inject(RechercheService);
  
  pageActuelle = signal(1);
  parPage = 6;

  offresAffichees = computed(() => {
    let debut = (this.pageActuelle() - 1) * this.parPage;
    return this.rechercheService.resultats().slice(debut, debut + this.parPage);
  });

  totalNombrePages = computed(() => 
    Math.ceil(this.rechercheService.resultats().length / this.parPage)
  );

  getImgUrl(url: string): string {
    if (!url) return 'assets/placeholder-immobilier.jpg';
    return `http://api-immobilier.osengo-tpdwwm-moulins.fr/${url}`;
  }

  changerPage(page: number) {
    this.pageActuelle.set(page);
    window.scrollTo(0, 0);
  }
}