import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { PartnerComponent } from './partner/partner.component';
import { appRoutes } from './router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ValueComponent } from './value/value.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    AboutComponent,
    NavBarComponent,
    FooterComponent,
    PortfolioComponent,
    ServicesComponent,
    PartnerComponent,
    ContactComponent,
    LoginComponent,
    BlogComponent,
    ValueComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
