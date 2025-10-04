import {inject} from '@angular/core';

import {ThemeService} from '@service/theme/theme.service';
import {WebSocketService} from '@service/websocket/websocket.service';

export const APP_INITIALIZERS = () => {
  initThemeService();
  initWebSocketService();
};

const initThemeService = () => inject(ThemeService).init();

const initWebSocketService = () => inject(WebSocketService).connect();
