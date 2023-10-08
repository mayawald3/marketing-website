import {Component} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {PageSelector} from "../../api/page-selector.enum"
import {Images} from "../../api/images.enum"

@Component({
  selector: 'main-portlet',
  templateUrl: './main-portlet.component.html',
  styleUrls: ['./main-portlet.component.css']
})
export class MainPortletComponent {
  title = 'main-portlet'
  companyName = 'Marketing On A Mission'
  pageSelector: BehaviorSubject<PageSelector> = new BehaviorSubject<PageSelector>(PageSelector.LANDING)

  onTabClick(pageSelector: PageSelector) {
    this.pageSelector.next(pageSelector)
  }

  protected readonly PageSelector = PageSelector;
  protected readonly Images = Images;

}
