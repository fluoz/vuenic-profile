import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationWidth } from '@angular/common';
import { Subscription, from } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'vuenic-profile';
  mediaSub: Subscription;
  constructor(public mediaObserver: MediaObserver) { };
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
    })
  };
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  };

}

const jumbotron = document.querySelector('.jumbotron');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelector('.thumb');
const thumb2 = document.querySelector('.thumb2');

