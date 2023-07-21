import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],

    responsive: {
      0: {
        items: 1
      },
      550: {
        items: 2
      },
      780: {
        items: 3
      },
      1040: {
        items: 4
      },
      1300:{
        items:5
      }
    },
    nav: false
  }
}
