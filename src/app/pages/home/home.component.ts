import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationWidth } from '@angular/common';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  customOptions: OwlOptions = {

    loop: true,
    mouseDrag: false,
    nav: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 10000,

    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      600: {
        items: 3,
        margin: 13,
      },
      940: {
        items: 4,
        margin: 13,
      }
    },

  };
  custom2: OwlOptions = {
    items: 1,
    lazyLoad: true,
    loop: true,
    mouseDrag: false,
    nav: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 35,

    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      600: {
        items: 3,
        margin: 13,
      },
      940: {
        items: 4,
        margin: 13,
      }
    },

  }
  custom3: OwlOptions = {
    items: 1,
    lazyLoad: true,
    loop: true,
    mouseDrag: false,
    nav: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 35,

    responsive: {
      0: {
        items: 1
      },
      1400: {
        items: 2
      },
      1602: {
        items: 3,

      },
      1601: {
        items: 4,

      }
    },

  }
  title = 'vuenic-profile';
  mediaSub: Subscription;
  deviceXs: boolean;
  deviceSm: boolean;
  deviceMd: boolean;
  deviceLg: boolean;
  constructor(public mediaObserver: MediaObserver) { }
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
      this.deviceSm = result.mqAlias === 'sm' ? true : false;
      this.deviceMd = result.mqAlias === 'md' ? true : false;
      this.deviceLg = result.mqAlias === 'lg' ? true : false;
    })
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

}

const menunya = document.querySelector('#input');
const sidebar = document.querySelector('.tside');


