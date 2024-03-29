import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { ProcessComponent } from './process/process.component';
import { CtaCardFooterComponent } from './cta-card-footer/cta-card-footer.component';
import { GlobalNetworkComponent } from './global-network/global-network.component';
import { TestimonialsAreaComponent } from './testimonials-area/testimonials-area.component';
import { CardComponent } from './shared/card/card.component';
import { PlanAreaComponent } from './plan-area/plan-area.component';
import { CardPlanComponent } from './shared/card-plan/card-plan.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CounterComponent,
    ProcessComponent,
    FooterComponent,
    CtaCardFooterComponent,
    GlobalNetworkComponent,
    TestimonialsAreaComponent,
    CardComponent,
    PlanAreaComponent,
    CardPlanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
