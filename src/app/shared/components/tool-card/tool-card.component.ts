import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: '.shared-tool-card',
  imports: [RouterLink],
  templateUrl: './tool-card.component.html',
  styleUrl: './tool-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolCardComponent {
  $showHeader: InputSignal<boolean> = input(true, {alias: 'showHeader'});
  $headerText: InputSignal<string> = input('', {alias: 'headerText'});
  $title: InputSignal<string> = input.required({alias: 'title'});
  $routerLink: InputSignal<string> = input.required({alias: 'rLink'});
}
