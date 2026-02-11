import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleModel } from '../../models/article-model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss'
})
export class FooterComponent implements OnInit {
  formulaire: FormGroup;
  
  articleContact = signal<ArticleModel[]>([]);
  formSent = signal<boolean>(false);
  
  contactData = {
    prenom: '',
    nom: '',
    telephone: '',
    email: '',
    message: ''
  };


  constructor(private http: HttpClient, private fb:FormBuilder){
    this.formulaire = this.fb.group({
      prenom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      telephone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    });
  }

  ngOnInit(): void {
    this.http.get<ArticleModel[]>('http://api-immobilier.osengo-tpdwwm-moulins.fr/article.php?id=2').subscribe(response => {
      this.articleContact.set(response);
    });
  }

  sendForm() {
    this.http.post('http://api-immobilier.osengo-tpdwwm-moulins.fr/contact.php', this.formulaire.value).subscribe({
      next: (response) => {
        console.log('Formulaire envoyé avec succès:', response);
        this.formSent.set(true);
      },
      error: (error) => {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
      }
    });       
  }
}