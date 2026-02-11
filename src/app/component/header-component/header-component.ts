import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { RechercheService } from '../../services/recherche-service';
import { ApiService } from '../../services/api-service';
import { TypeBienModel } from '../../models/type-bien-model';
import { VilleModel } from '../../models/ville-model';
import { OffreModel } from '../../models/offre-model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule], 
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent implements OnInit {
  
  formulaire: FormGroup;
  types = signal<TypeBienModel[]>([]);
  villes = signal<VilleModel[]>([]);
  offres = signal<OffreModel[]>([]);

  selection = {
    type: '',
    ville: '',
    budget: ''
  };


  constructor(private apiService: ApiService, private rechercheService: RechercheService, private router: Router, private fb: FormBuilder){
    this.formulaire = this.fb.group({
      typeBien: [''],
      ville: [''],
      budget: []
    })
  }

  ngOnInit(): void {
    this.apiService.fetchTypesBiens().subscribe({
      next: (data) => { this.types.set(data); },
      error: (err) => console.error('Erreur Types:', err)
    });

    this.apiService.fetchVilles().subscribe({
      next: (data) => { this.villes.set(data); },
      error: (err) => console.error('Erreur Villes:', err)
    });

    this.apiService.fetchOffres().subscribe({
      next: (data) => { this.offres.set(data); },
      error: (err) => console.error('Erreur Offres:', err)
    });
  }

  research(): void {
    const filtres = {
      type: this.formulaire.value.typeBien,
      ville: this.formulaire.value.ville,
      budget: this.formulaire.value.budget
    };
    this.rechercheService.rechercher(filtres);
    this.router.navigate(['/recherche']);
  }
}