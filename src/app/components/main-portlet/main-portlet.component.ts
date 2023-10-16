import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {PageSelector} from "../../api/page-selector.enum"
import {Images} from "../../api/images.enum"

@Component({
  selector: 'main-portlet',
  templateUrl: './main-portlet.component.html',
  styleUrls: ['./main-portlet.component.css']
})
export class MainPortletComponent {
  pageSelector: BehaviorSubject<PageSelector> = new BehaviorSubject<PageSelector>(PageSelector.LANDING)

  onTabClick(pageSelector: PageSelector) {
    this.pageSelector.next(pageSelector)
  }

  protected readonly PageSelector = PageSelector;
  protected readonly Images = Images;

}
