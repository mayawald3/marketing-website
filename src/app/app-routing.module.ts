import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {LandingPageComponent} from "./components/main-portlet/landing-page/landing-page.component";
import {ContactComponent} from "./components/main-portlet/contact/contact.component";
import {ServicesComponent} from "./components/main-portlet/services/services.component";
import {WorkHistoryComponent} from "./components/main-portlet/work-history/work-history.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingPageComponent,
    data: { title: 'Home' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Services' }
  },
  {
    path: 'contact-us',
    component: ContactComponent,
    data: { title: 'Contact Us' }
  },
  {
    path: 'portfolio',
    component: WorkHistoryComponent,
    data: { title: 'Portfolio' }
  },
  {
    path: '**',
    component: LandingPageComponent,
    data: { title: 'Home' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
