import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolComponent {}
