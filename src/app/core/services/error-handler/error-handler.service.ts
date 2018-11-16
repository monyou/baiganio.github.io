import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService } from '../event-bus/event-bus.service';

@Injectable()
export class ErrorHandlerService {

  constructor(private router: Router, private eventBusService: EventBusService) { }

  handleRequestError(error, callback?, params?, component?, retryFunction?, retryFunctionParams?) {
    let errorMessage;
    const status = error.status;
    if (error.error.type === 'error' && status === 0) {
      return this.router.navigate(['/server-alert']);
    } else if (status) {
      errorMessage = error.error;
    } else {
     errorMessage = error;
    }
    // if (errorMessage.includes('Unhandled exception with ID') || errorMessage.includes('Error with ID') || !callback) {
    //  this.eventBusService.emitUnknownError({
    //     retryFunction: retryFunction,
    //     retryFunctionParams: retryFunctionParams,
    //     errorMessage: errorMessage
    //   });
    //  errorMessage = '';
    // }
    if (typeof callback === 'function') {
     const self = params[0];
     params[0] = errorMessage;
     params[params.length] = status;
     params[params.length] = error;
     if (params) {
        callback.apply(self, params);
     } else {
        callback(error);
     }
    } else {
      // Think about how to handle the error in other way
      console.log(errorMessage);
    }
    return errorMessage;
  }
  handleRequestErrorAndRelocate(error, location, callback?, params?, retryFunction?, retryFunctionParams?) {
    this.handleRequestError(error, callback, params, null, retryFunction, retryFunctionParams);
    this.relocate(location);
  }

  relocate(loction) {
    this.router.navigate([location]);
  }

  getSmarterErrorMessage(component) { }

}
