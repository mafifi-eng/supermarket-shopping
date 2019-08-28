import { Component, OnInit } from '@angular/core';
import { SupermarketService } from '../supermarket.service';
import { ActivatedRoute } from '@angular/router';
import { CarouselImgs } from '../carousel-img';

@Component({
  selector: 'app-supermarket-carousel',
  templateUrl: './supermarket-carousel.component.html',
  styleUrls: ['./supermarket-carousel.component.css']
})
export class SupermarketCarouselComponent implements OnInit {

  supermarketCarouselImg: CarouselImgs;

  constructor(private route: ActivatedRoute,
    private supermarketService: SupermarketService) { }

  ngOnInit() {
    this.getSupermarketCarouselImg();
  }

  getSupermarketCarouselImg(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.supermarketService.getSupermarketCarouselImg(id)
      .subscribe(supermarketCarouselImg => this.supermarketCarouselImg = supermarketCarouselImg);
  }
}
