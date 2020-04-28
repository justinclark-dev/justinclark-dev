import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { WickedawesomepizzaComponent } from './components/portfolio/wickedawesomepizza/wickedawesomepizza.component';
import { ExoticimportsComponent } from './components/portfolio/exoticimports/exoticimports.component';
import { PortfoliowebsiteComponent } from './components/portfolio/portfoliowebsite/portfoliowebsite.component';
import { CampaigndashboardComponent } from './components/portfolio/campaigndashboard/campaigndashboard.component';
import { PyramidsofgizaComponent } from './components/portfolio/pyramidsofgiza/pyramidsofgiza.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    HomeComponent,
    WickedawesomepizzaComponent,
    ExoticimportsComponent,
    PortfoliowebsiteComponent,
    CampaigndashboardComponent,
    PyramidsofgizaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
