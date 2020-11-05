import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { StaticPageComponent } from './static-page/static-page.component';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';
import { SaleComponent } from './sale/sale.component';
import { PRODUCT_NORMALIZER, UrlModule } from '@spartacus/core';
import { ProductNameNormalizer } from './product-name.normalizer';
import { ProductCategoryNormalizer } from './product-category.normalizer';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StaticPageComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-training.eastus.cloudapp.azure.com:8443',
          prefix: '/occ/v2/'
        }
      },
      context: {
        baseSite: ['electronics-spa'],
        customParam: ['test'],
        urlParameters: ['customParam','baseSite', 'language', 'currency']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.1'
      }
    }),
    CustomRoutingModule,
    RouterModule,
    UrlModule
  ],
  providers: [
    { provide: PRODUCT_NORMALIZER, useClass: ProductNameNormalizer, multi: true },
    { provide: PRODUCT_NORMALIZER, useClass: ProductCategoryNormalizer, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
