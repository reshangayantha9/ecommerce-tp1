import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from '../share/share.component';
import { MainNewProductComponent } from './components/main-new-product/main-new-product.component';
import { HeaderContextComponent } from './components/header-context/header-context.component';
import { HeaderTopComponent } from './components/header-context/inner-items/header-top/header-top.component';
import { HeaderMiddleComponent } from './components/header-context/inner-items/header-middle/header-middle.component';
import { HeaderBottomComponent } from './components/header-context/inner-items/header-bottom/header-bottom.component';
import { MainBrandsComponent } from './components/main-brands/main-brands.component';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainFeturedProductComponent } from './components/main-fetured-product/main-fetured-product.component';
import { MainBlogComponent } from './components/main-blog/main-blog.component';
import { FooterContextComponent } from './components/footer-context/footer-context.component';
import { FooterTopComponent } from './components/footer-context/inner-items/footer-top/footer-top.component';
import { FooterMiddleComponent } from './components/footer-context/inner-items/footer-middle/footer-middle.component';
import { FooterBottomComponent } from './components/footer-context/inner-items/footer-bottom/footer-bottom.component';
@NgModule({
    declarations: [
        ShareComponent,
        MainNewProductComponent,
        HeaderContextComponent,
        HeaderTopComponent,
        HeaderMiddleComponent,
        HeaderBottomComponent,
        MainBrandsComponent,
        MainFeturedProductComponent,
        MainBlogComponent,
        FooterContextComponent,
        FooterTopComponent,
        FooterMiddleComponent,
        FooterBottomComponent
    ],
    exports: [
        MainNewProductComponent,
        HeaderContextComponent,
        MainBrandsComponent,
        MainFeturedProductComponent,
        MainBlogComponent,
        FooterContextComponent
    ],
    imports: [
        CommonModule,
        ShareRoutingModule,
        CarouselModule
    ]
})
export class ShareModule { }
