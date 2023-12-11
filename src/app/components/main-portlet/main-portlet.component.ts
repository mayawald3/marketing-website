import {Component} from "@angular/core";
import {PageSelector} from "../../api/page-selector.enum"
import {Images} from "../../api/images.enum"
import {Router} from "@angular/router";

@Component({
  selector: 'main-portlet',
  templateUrl: './main-portlet.component.html',
  styleUrls: ['./main-portlet.component.css']
})
export class MainPortletComponent {
  constructor(private router: Router) {
  }
  onTabClick(pageSelector: PageSelector) {
    switch (pageSelector) {
      case PageSelector.LANDING:
        this.router.navigate(['home'])
        break
      case PageSelector.CONTACT:
        this.router.navigate(['contact-us'])
        break
      case PageSelector.WORK_HISTORY:
        this.router.navigate(['portfolio'])
        break
      case PageSelector.SERVICES:
        this.router.navigate(['services'])
    }
  }

  protected readonly PageSelector = PageSelector;
  protected readonly Images = Images;

}
