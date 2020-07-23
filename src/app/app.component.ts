import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationWidth } from '@angular/common';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'vuenic-profile';
  mediaSub: Subscription;
  deviceXs: boolean;
  constructor(public mediaObserver: MediaObserver) { }
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    })
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}



const jumbotron = document.querySelector('.jumbotron');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelector('.thumb');
const thumb2 = document.querySelector('.thumb2');
const navbar = document.querySelector('.navbar');
const body = document.getElementById('body')


// window.addEventListener('scroll', function () {
//   const scrolled = window.scrollY;
//   if (scrolled > 100) {
//     navbar.classList.add('navbartest');
//   }
//   else {
//     navbar.classList.remove('navbartest');
//   }

// })
