import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, FeaturesConfigModule, UrlModule, I18nModule } from '@spartacus/core';
import { CartComponent } from '../cart/cart.component';
import { CartCouponModule, CartSharedModule, MediaModule, PromotionsModule, SpinnerModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CartSharedModule,
    CommonModule,
    CartCouponModule,
    RouterModule,
    MediaModule,
    UrlModule,
    PromotionsModule,
    FeaturesConfigModule,
    I18nModule,
    FormsModule,
    SpinnerModule,
    
    ConfigModule.withConfig({
      cmsComponents: {
        CartComponent: {
          component: CartComponent,
        }
      }
    } as CmsConfig)
  ],
  entryComponents: [CartComponent]
})
export class ComponentsModule { }
