import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AppService } from './app.service';

export const recipegGuard: CanActivateFn = (route, state) => {

const injector = inject(AppService);
if(injector.isloading) {
  return true;
}


  return false;
};
