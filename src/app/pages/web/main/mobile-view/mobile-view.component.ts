import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: '.page-web-main-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrl: './mobile-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWebMainMobileViewComponent {}
