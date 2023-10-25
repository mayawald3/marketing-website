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

  missionStatement = "BASED OUT OF THE TWIN CITIES, WE PROVIDE RESULTS DRIVEN SOCIAL MEDIA MANAGEMENT. WE ENSURE YOUR CONTENT STAYS FRESH, RELEVANT, AND PERFECTLY ALIGNED WITH YOUR INDUSTRY."
  createStatement = "We prioritize our clients by creating a marketing strategy that aligns to their marketing goals to contribute to the overall success of their company. We specialize in crafting, scheduling, and optimizing curated content across your social media platforms, ensuring that your online presence is nothing short of exceptional."
  chargeStatement = "We're here to supercharge your online presence by managing digital paid ad campaigns that precisely target your ideal customers. Our goal is to help you build unwavering brand recognition and awareness, establishing a lasting connection with your business's target audience."
  buildStatement = "We don't just create content; we create experiences that resonate with your audience and drive results. Our expert team leverages data-driven insights and analytics to deliver real-time reports on your social media performance, helping you make informed decisions and seize opportunities for growth."
  succeedStatement = "We are your trusted partner in the digital landscape, always on the cutting edge of industry keywords and trends. Saving your precious time by obtaining, organizing, and optimizing content on your social media platforms, we guarantee that your brand's voice will be heard and respected."

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
