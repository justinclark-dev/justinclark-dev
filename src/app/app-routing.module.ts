import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WickedawesomepizzaComponent } from './components/portfolio/wickedawesomepizza/wickedawesomepizza.component';
import { ExoticimportsComponent } from './components/portfolio/exoticimports/exoticimports.component';
import { PortfoliowebsiteComponent } from './components/portfolio/portfoliowebsite/portfoliowebsite.component';
import { CampaigndashboardComponent } from './components/portfolio/campaigndashboard/campaigndashboard.component';
import { PyramidsofgizaComponent } from './components/portfolio/pyramidsofgiza/pyramidsofgiza.component';
import { TelawrenceComponent } from './components/portfolio/telawrence/telawrence.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'about', component: AboutComponent, data: {animation: 'About'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'Contact'} },
  { path: 'portfolio', component: PortfolioComponent, data: {animation: 'Portfolio'} },
  { path: 'portfolio/wickedawesomepizza', component: WickedawesomepizzaComponent, data: {animation: 'Wickedawesomepizza'} },
  { path: 'portfolio/exoticimports', component: ExoticimportsComponent, data: {animation: 'Exoticimports'} },
  { path: 'portfolio/portfoliowebsite', component: PortfoliowebsiteComponent, data: {animation: 'Portfoliowebsite'} },
  { path: 'portfolio/campaigndashboard', component: CampaigndashboardComponent, data: {animation: 'Campaigndashboard'} },
  { path: 'portfolio/pyramidsofgiza', component: PyramidsofgizaComponent, data: {animation: 'Pyramidsofgiza'} },
  { path: 'portfolio/telawrence', component: TelawrenceComponent, data: {animation: 'Telawrence'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
