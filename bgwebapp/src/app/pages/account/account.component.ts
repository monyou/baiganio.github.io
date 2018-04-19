import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../core/services/backend/backend.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loading = false;
  userId;
  errorMsg = '';
  constructor(private backendService: BackendService,) { }

  ngOnInit() {
    this.loading = true;
    // this.retryFunction = this.ngOnInit.bind(this);
    this.backendService.getCurrentUser()
      .subscribe(
      response => {
        const data = response.json();
        //this.userId = data.Id.id;
        console.log(data);
        // this.processResponse(data);
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.errorMsg = error.json();
        // this.errorHandlerService.handleRequestError(error, this.handleError, [this], null, this.retryFunction);
      },
      () => this.handleSuccess()
    );
  }


  handleSuccess(): void {
    this.loading = false;
  }
}
