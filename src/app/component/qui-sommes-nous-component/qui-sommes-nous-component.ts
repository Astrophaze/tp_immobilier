import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleModel } from '../../models/article-model';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-qui-sommes-nous-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qui-sommes-nous-component.html',
  styleUrl: './qui-sommes-nous-component.scss',
})
export class QuiSommesNousComponent implements OnInit {
  dataArticle = signal<ArticleModel[]>([]);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.fetchArticle(1).subscribe({
      next: (response) => {
          this.dataArticle.set(response);
      },
      error: (err) => console.error(err),
    });
  }
}
