import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { BackendService } from './services/backend/backend.service';
import { HeaderService } from './services/header/header.service';
import { AuthGuard } from './services/auth/auth.guard';
import { UserDataService } from './services/user-data/user-data.service';
import { EventBusService } from './services/event-bus/event-bus.service';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { UtilityService } from './services/utility/utility.service';
import { CourseService } from './services/course/course.service';
import { HistoryService } from './services/history/history.service';
import { StudentService } from './services/student/student.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    BackendService,
    HeaderService,
    AuthGuard,
    UserDataService,
    EventBusService,
    ErrorHandlerService,
    UtilityService,
    CourseService,
    StudentService,
   // HistoryService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
