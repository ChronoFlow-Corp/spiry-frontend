import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';

import {IconName} from '@components/icon/icon.component.type';

@Component({
  selector: '.shared-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  $name: InputSignal<IconName> = input.required({alias: 'name'});
}
