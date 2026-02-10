import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeBienModel } from '../models/type-bien-model';
import { VilleModel } from '../models/ville-model';
import { OffreModel } from '../models/offre-model';
import { ArticleModel } from '../models/article-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}
  

  fetchTypesBiens(){
    return this.http.get<TypeBienModel[]>('http://api-immobilier.osengo-tpdwwm-moulins.fr/types.php');
  }

  fetchVilles() {
    return this.http.get<VilleModel[]>('http://api-immobilier.osengo-tpdwwm-moulins.fr/villes.php');
  }

  fetchOffres() {
    return this.http.get<OffreModel[]>('http://api-immobilier.osengo-tpdwwm-moulins.fr/offres.php');
  }

  fetchArticle(idArticle: number) {
      return this.http.get<ArticleModel[]>('http://api-immobilier.osengo-tpdwwm-moulins.fr/article.php?id=' + idArticle);
    }
}
