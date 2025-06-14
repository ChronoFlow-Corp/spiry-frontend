import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: '.page-web-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {}
