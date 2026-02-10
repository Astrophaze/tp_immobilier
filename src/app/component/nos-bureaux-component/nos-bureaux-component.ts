import { Component, OnInit, signal, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { ApiService } from '../../services/api-service';
import { OffreModel } from '../../models/offre-model';

register();

@Component({
  selector: 'app-nos-bureaux-component',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './nos-bureaux-component.html',
  styleUrl: './nos-bureaux-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NosBureauxComponent implements OnInit {

  @ViewChild('swiperEl') swiperRef!: ElementRef;
  listeOffres = signal<OffreModel[]>([]);

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.fetchOffres().subscribe(response => {
      this.listeOffres.set(response);
      setTimeout(() => this.initSwiper(), 50);
    });
  }

  slideNext() {
    this.swiperRef.nativeElement.swiper.slideNext();
  }

  slidePrev() {
    this.swiperRef.nativeElement.swiper.slidePrev();
  }

  private initSwiper() {
    const swiperEl = this.swiperRef?.nativeElement;
    if (swiperEl) {
      const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }
      };
      Object.assign(swiperEl, params);
      swiperEl.initialize();
    }
  }
}