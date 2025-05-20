import {inject} from '@angular/core';

import {ThemeService} from '@service/theme/theme.service';

export const APP_INITIALIZERS = () => initThemeService;

const initThemeService = () => inject(ThemeService).init();
