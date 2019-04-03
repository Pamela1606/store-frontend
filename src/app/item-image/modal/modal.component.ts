import { Component, OnInit } from '@angular/core';
import {IImage} from 'ng-simple-slideshow';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
    { url: 'assets/imgs/slider/1.jpeg', caption: 'The first slide', href: '#config' },
    { url: 'assets/imgs/slider/2.jpeg', clickAction: () => alert('custom click function') },
    { url: 'assets/imgs/slider/3.jpeg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/imgs/slider/4.jpeg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];

  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  constructor() { }

  ngOnInit() {
  }

}
