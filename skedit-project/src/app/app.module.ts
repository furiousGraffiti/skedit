import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

import { SignUpFormComponent } from './shared/forms/sign-up-form/sign-up-form.component';
import { DashboardPanelComponent } from './shared/panels/dashboard-panel/dashboard-panel.component';
import { SignInFormComponent } from './shared/forms/sign-in-form/sign-in-form.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ComposerPanelComponent } from './shared/panels/composer-panel/composer-panel.component';
import { ComposerComponent } from './composer/composer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    PageNotFoundComponent,
    SignInFormComponent,
    SignUpFormComponent,
    HeaderComponent,
    DashboardPanelComponent,
    ComposerPanelComponent,
    ComposerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    // ------------------------------------------------------------
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
