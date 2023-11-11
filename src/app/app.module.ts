import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import { PopularCategoryComponent } from './popular-category/popular-category.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { RecommendedItemsComponent } from './recommended-items/recommended-items.component';
import { TradeServicesComponent } from './trade-services/trade-services.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProductsComponent } from './list-products/list-products.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {FormsModule} from '@angular/forms';
import { CommandeValidationComponent } from './commande-validation/commande-validation.component';
import {ProduitCommandDetailsComponent} from './produit-command-details/produit-command-details.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NavBarComponent,
    MenuCategoryComponent,
    FooterComponent,
    CarouselSliderComponent,
    PopularCategoryComponent,
    QuoteFormComponent,
    RecommendedItemsComponent,
    TradeServicesComponent,
    ListProductsComponent,
    WelcomeComponent,
    CommandeValidationComponent,
    ProduitCommandDetailsComponent,
    MessageComponent

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    TradeServicesComponent,
    RecommendedItemsComponent,
    PopularCategoryComponent,
    CarouselSliderComponent,
    MenuCategoryComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
