import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService } from '../event-bus/event-bus.service';

class HistoryItem {
  path: any;
  component: any;
  innerLocation: any;
}

@Injectable()
export class HistoryService {
  // private history: Array<HistoryItem> = [];
  // private automatedBack: Boolean = false;

  // constructor(private router: Router, private location: Location, private eventBusService: EventBusService) {
  //   router.events.subscribe((path) => {
  //     if (!path['state']) {
  //        return;
  //     }
  //     if (path['url'] && path['url'].includes('#')) {
  //        return;
  //     }
  //     if (this.automatedBack) {
  //        this.automatedBack = !this.automatedBack;
  //        return;
  //     }
  //     if ((!this.getLast()) || (this.getLast() && (this.getLast()['path'] !== path['url']))) {
  //        this.addToHistory(path['url']);
  //     }
  //   });
  // }

  // addToHistory(path, component?, innerLocation?) {
  //   if (!path) {
  //     path = this.location;
  //   }
  //   if (!component) {
  //     component = this.getComponentByPath(path);
  //   }
  //   if (!innerLocation) {
  //     innerLocation = this.getComponentByPath(path);
  //   }
  //   if (!this.isValid(path, component, innerLocation)) {
  //     return;
  //   }

  //   this.history.push({
  //     path: path,
  //     component: component,
  //     innerLocation: innerLocation
  //   });
  //   this.eventBusService.emitChangeRoute({
  //     path: path,
  //     component: component,
  //     innerLocation: innerLocation
  //   });
  //   // everytime when the screen ( if the subscreen uses the history service ) is changed we move the browser to the top
  //   window.scrollTo(0, 0);
  // }

  // isValid(path, component, innerLocation) {
  //   const last = this.getLast();
  //   if (!last) {
  //     return true;
  //   }
  //   if (last['path'] !== path
  //     || last['component'] !== component
  //     || last['innerLocation'] !== innerLocation) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // goBack() {
  //   // check is the same component or use browser back functionallity
  //   // we remove the current screen from the history
  //   this.history.pop();
  //   const targetLocation = this.getLast();
  //   if (!targetLocation) {
  //     return this.router.navigate(['/dashboard']);
  //   }
  //   this.eventBusService.emitChangeRoute(targetLocation);
  //   if (this.location !== targetLocation['path']) {
  //     this.automatedBack = true;
  //     // this.location;
  //   }
  // }

  // getLast() {
  //   // check is the same component or use browser back functionallity
  //   return this.history[this.history.length - 1];
  // }

  // getPreviousPage() {
  //   // check is the same component or use browser back functionallity
  //   if (this.history.length > 1) {
  //     return this.history[this.history.length - 2].component;
  //   }
  // }

  // getHistoryLength() {
  //   return this.history.length;
  // }

  // enabledBackBtnOnScreen() {
  //   const last = this.getLast();
  //   return this.getHistoryLength() > 1 &&
  //     !last['innerLocation'].includes('dashboard') &&
  //     last['component'].includes('dashboard');
  // }

  // getComponentByPath(path) {
  //   return path.slice(1, path.length);
  // }


}
