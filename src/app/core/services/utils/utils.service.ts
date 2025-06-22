import {Injectable} from '@angular/core';

import {
  blockDocument,
  changeIOSInfoBarColor,
  unblockDocument,
} from '@core/utils/utils';

@Injectable({providedIn: 'root'})
export class UtilsService {
  blockDocument(): void {
    blockDocument();
  }

  unblockDocument(): void {
    unblockDocument();
  }

  changeIOSInfoBarColor(toColor: string): void {
    changeIOSInfoBarColor(toColor);
  }
}
