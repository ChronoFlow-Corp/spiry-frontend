import {ChangeDetectionStrategy, Component} from '@angular/core';

import {AiInputComponent} from '@shared/components/ai-input/ai-input.component';

@Component({
  selector: '.page-web-main-mobile-view',
  imports: [AiInputComponent],
  templateUrl: './mobile-view.component.html',
  styleUrl: './mobile-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWebMainMobileViewComponent {}
