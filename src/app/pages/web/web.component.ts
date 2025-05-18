import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: '.page-web',
  imports: [],
  templateUrl: './web.component.html',
  styleUrl: './web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebComponent {}
