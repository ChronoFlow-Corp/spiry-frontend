import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {SidebarMobileHeaderComponent} from '@components/sidebar-mobile/header/sidebar-mobile-header.component';
import {SidebarMobileMenuComponent} from '@components/sidebar-mobile/menu/sidebar-mobile-menu.component';
import {DebuggerService} from '@service/debugger/debugger.service';
import {SidebarMobileStore} from '@store/sidebar-mobile/sidebar-mobile.store';

@Component({
  selector: '.shared-sidebar-mobile',
  imports: [SidebarMobileHeaderComponent, SidebarMobileMenuComponent],
  templateUrl: './sidebar-mobile.component.html',
  styleUrl: './sidebar-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileComponent implements OnInit, OnDestroy {
  protected readonly testId = 'shared-sidebar-mobile';

  protected readonly $isMenuShown =
    inject(SidebarMobileStore).state.isMenuShown;

  readonly #debuggerService = inject(DebuggerService);

  ngOnInit(): void {
    this.#debuggerService.log('SidebarMobileComponent', 'init');
  }

  ngOnDestroy(): void {
    this.#debuggerService.log('SidebarMobileComponent', 'destroy');
  }
}
