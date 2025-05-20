import {Injectable} from '@angular/core';

import {blockDocument, unblockDocument} from '@core/utils/utils';

@Injectable({providedIn: 'root'})
export class UtilsService {
  blockDocument(): void {
    blockDocument();
  }

  unblockDocument(): void {
    unblockDocument();
  }
}
