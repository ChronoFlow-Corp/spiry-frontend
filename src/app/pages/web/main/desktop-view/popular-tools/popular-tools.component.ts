import {ChangeDetectionStrategy, Component} from '@angular/core';

import {DividerWithTextComponent} from '@shared/components/divider-with-text/divider-with-text.component';
import {ToolCardComponent} from '@shared/components/tool-card/tool-card.component';

@Component({
  selector: '.page-web-main-desktop-view-popular-tools',
  imports: [ToolCardComponent, DividerWithTextComponent],
  templateUrl: './popular-tools.component.html',
  styleUrl: './popular-tools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWebMainDesktopViewPopularToolsComponent {}
