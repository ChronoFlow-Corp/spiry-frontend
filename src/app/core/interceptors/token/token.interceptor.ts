import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';

import {AuthService} from '@service/auth/auth.service';
import {ENVIRONMENT_TOKEN} from '@environments/environment.type';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  return !token || !req.url.includes(inject(ENVIRONMENT_TOKEN).apiUrl)
    ? next(req)
    : next(
        req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        }),
      );
};
