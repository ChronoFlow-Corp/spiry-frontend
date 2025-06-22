import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';

@Component({
  selector: '.shared-divider-with-text',
  templateUrl: './divider-with-text.component.html',
  styleUrl: './divider-with-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerWithTextComponent {
  text: InputSignal<string> = input.required();
}
