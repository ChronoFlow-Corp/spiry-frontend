import {ChangeDetectionStrategy, Component} from '@angular/core';

import {PageWebMainDesktopViewComponent} from '@pages/web/main/desktop-view/desktop-view.component';
import {PageWebMainMobileViewComponent} from '@pages/web/main/mobile-view/mobile-view.component';

@Component({
  selector: '.page-web-main',
  imports: [PageWebMainMobileViewComponent, PageWebMainDesktopViewComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWebMainComponent {}
