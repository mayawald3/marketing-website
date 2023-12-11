import {Component, EventEmitter, Output} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {PageSelector} from "../../../api/page-selector.enum";
import {Images} from "../../../api/images.enum";
import {Router} from "@angular/router";


@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
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
export class ServicesComponent {
  flipCard1: string = 'inactive';
  flipCard2: string = 'inactive';
  flipCard3: string = 'inactive';
  flipCard4: string = 'inactive';

  constructor(
    private router: Router
  ){
  }


  toggleFlip(cardNumber: number) {
    switch(cardNumber) {
      case 1:
        gtag('event', 'service_card_flipped', {
          'service-card': 'staple-package'
        });
        this.flipCard1 = (this.flipCard1 == 'inactive') ? 'active' : 'inactive'
        break
      case 2:
        gtag('event', 'service_card_flipped', {
          'service-card': 'excel-package'
        });
        this.flipCard2 = (this.flipCard2 == 'inactive') ? 'active' : 'inactive'
        break
      case 3:
        gtag('event', 'service_card_flipped', {
          'service-card': 'superior-package'
        });
        this.flipCard3 = (this.flipCard3 == 'inactive') ? 'active' : 'inactive'
        break
      case 4:
        gtag('event', 'service_card_flipped', {
          'service-card': 'add-ons-card'
        });
        this.flipCard4 = (this.flipCard4 == 'inactive') ? 'active' : 'inactive'
        break
      default:
        break
    }
  }

  goToContactPage(){
    gtag('event', 'book_button_clicked');
    this.router.navigate(['contact-us'])
  }

  protected readonly PageSelector = PageSelector;
  protected readonly Images = Images;
}
