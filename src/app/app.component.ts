import { Component, OnInit } from '@angular/core';
import { BackendService } from './core/services/backend/backend.service';
import { HeaderService } from './core/services/header/header.service';
import { EventBusService } from './core/services/event-bus/event-bus.service';
import { ErrorHandlerService } from './core/services/error-handler/error-handler.service';
import { UtilityService } from './core/services/utility/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  retryFunction = null;
  authToken: any;

  /**
   *
   */
  constructor(
    private backendService: BackendService,
    private headerService: HeaderService,
    private eventBusService: EventBusService,
    private errorHandlerService: ErrorHandlerService,
    private utilityService: UtilityService) { }

  ngOnInit() {
    // this.retryFunction = this.ngOnInit.bind(this);
    this.backendService.getClientAccessToken()
      .subscribe(
        response => {
          this.headerService.authToken = response.access_token;
        },
        error => this.errorHandlerService.handleRequestError(error, null, null, null, this.retryFunction),
        () => {
          // if (this.utilityService.isLocalStorageNameSupported()) {
          //   localStorage.setItem('bgapi_user_token', null);
          // }
        }
      );
  }

  isSmallDevice(): boolean {
    return this.utilityService.isSmallDevice();
  }
}
