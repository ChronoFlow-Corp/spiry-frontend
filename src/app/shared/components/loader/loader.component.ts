import {ChangeDetectionStrategy, Component} from '@angular/core';

import {IconComponent} from '@components/icon/icon.component';

@Component({
  selector: '.shared-global-loader',
  imports: [IconComponent],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'f-center',
  },
})
export class LoaderComponent {}
