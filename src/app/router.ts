import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { PartnerComponent } from './partner/partner.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'partner', component: PartnerComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'team', component: TeamComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'Blog', component: BlogComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];