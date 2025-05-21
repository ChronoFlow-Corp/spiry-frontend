import {ChangeDetectionStrategy, Component} from '@angular/core';

import {PageWebMainMobileViewComponent} from '@pages/web/main/mobile-view/mobile-view.component';

@Component({
  selector: '.page-web-main',
  imports: [PageWebMainMobileViewComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWebMainComponent {}
