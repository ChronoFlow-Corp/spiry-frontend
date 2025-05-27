import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: '.page-web-main-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrl: './desktop-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWebMainDesktopViewComponent {}
