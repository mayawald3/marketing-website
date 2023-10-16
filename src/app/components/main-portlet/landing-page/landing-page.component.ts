import {Component, EventEmitter, Output} from "@angular/core";
import {Images} from "../../../api/images.enum";
import {PageSelector} from "../../../api/page-selector.enum";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
  trigger('flipState', [
    state('active', style({
      transform: 'rotateY(179deg)'
    })),
    state('inactive', style({
      transform: 'rotateY(0)'
    })),
    transition('active => inactive', animate('500ms ease-out')),
    transition('inactive => active', animate('500ms ease-in'))
  ])
  ]
})
export class LandingPageComponent {
  @Output() switchTabs: EventEmitter<PageSelector> = new EventEmitter<PageSelector>()
  flipCard1: string = 'inactive';
  flipCard2: string = 'inactive';
  flipCard3: string = 'inactive';
  flipCard4: string = 'inactive';


  goToNewPage(page: PageSelector){
    this.switchTabs.emit(page)
  }

  toggleFlip(cardNumber: number) {
    switch(cardNumber) {
      case 1:
        this.flipCard1 = (this.flipCard1 == 'inactive') ? 'active' : 'inactive'
        break
      case 2:
        this.flipCard2 = (this.flipCard2 == 'inactive') ? 'active' : 'inactive'
        break
      case 3:
        this.flipCard3 = (this.flipCard3 == 'inactive') ? 'active' : 'inactive'
        break
      case 4:
        this.flipCard4 = (this.flipCard4 == 'inactive') ? 'active' : 'inactive'
        break
    }
  }

  protected readonly Images = Images;
  protected readonly PageSelector = PageSelector;
}
