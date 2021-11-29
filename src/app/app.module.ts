import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ServicesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
