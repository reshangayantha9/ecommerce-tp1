import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../main/main.component';
import { MainPageContextComponent } from './components/main-page-context/main-page-context.component';
import { MainSliderComponent } from './components/main-page-context/inner-items/main-slider/main-slider.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {ShareModule} from "../share/share.module";
import { MainCategoryComponent } from './components/main-page-context/inner-items/main-category/main-category.component';
import { MainOfferComponent } from './components/main-page-context/inner-items/main-offer/main-offer.component';


@NgModule({
  declarations: [
    MainComponent,
    MainPageContextComponent,
    MainSliderComponent,
    MainCategoryComponent,
    MainOfferComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule,
    ShareModule,
  ]
})
export class MainModule { }
