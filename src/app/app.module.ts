import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LandingPageComponent} from "./components/main-portlet/landing-page/landing-page.component";
import {MainPortletComponent} from "./components/main-portlet/main-portlet.component";
import {ServicesComponent} from "./components/main-portlet/services/services.component";
import {ContactComponent} from "./components/main-portlet/contact/contact.component";
import {WorkHistoryComponent} from "./components/main-portlet/work-history/work-history.component";

@NgModule({
  declarations: [
    AppComponent,
    MainPortletComponent,
    LandingPageComponent,
    ContactComponent,
    ServicesComponent,
    WorkHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
