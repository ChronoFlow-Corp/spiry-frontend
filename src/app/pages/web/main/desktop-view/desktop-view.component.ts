import {ChangeDetectionStrategy, Component} from '@angular/core';

import {PageWebMainDesktopViewPopularToolsComponent} from '@pages/web/main/desktop-view/popular-tools/popular-tools.component';
import {AiInputComponent} from '@shared/components/ai-input/ai-input.component';

@Component({
  selector: '.page-web-main-desktop-view',
  imports: [AiInputComponent, PageWebMainDesktopViewPopularToolsComponent],
  templateUrl: './desktop-view.component.html',
  styleUrl: './desktop-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWebMainDesktopViewComponent {}
