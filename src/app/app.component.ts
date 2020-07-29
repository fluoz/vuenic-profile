import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationWidth } from '@angular/common';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { mixinColor } from '@angular/material/core';
import { fadeInItems } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}