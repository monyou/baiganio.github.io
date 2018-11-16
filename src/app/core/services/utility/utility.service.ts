import { Injectable } from '@angular/core';
const smallDeviceAverageSize = 1800;

@Injectable()
export class UtilityService {

  constructor() { }

  isLocalStorageNameSupported(): Boolean {
    const testKey = 'test', storage = window.localStorage;
    try {
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

 isSmallDevice(): boolean {
    const w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        width = w.innerWidth || e.clientWidth || g.clientWidth,
        height = w.innerHeight || e.clientHeight || g.clientHeight;

    return width + height < smallDeviceAverageSize;
 }

}
