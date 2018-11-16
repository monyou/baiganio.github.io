import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BackendService } from '../../../core/services/backend/backend.service';

declare const getLinedTextArea: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-syntax-checker',
  templateUrl: './syntax-checker.component.html',
  styleUrls: ['./syntax-checker.component.css']
})
export class SyntaxCheckerComponent implements OnInit {
  codeForTest = '';
  succMsg = '';
  compiled = false;
  loading = false;
  notcompiled = false;
  notcompMsg: any;
  constructor(private backendService: BackendService) { }

  ngOnInit() {
  }

  // AfterViewInit(): void {
  //   getLinedTextArea();
  // }

  testCode() {
    if (this.codeForTest !== '') {
        this.succMsg = '';
        this.notcompMsg = '';
        this.notcompiled = false;
        this.compiled = false;
        this.backendService.sendCodeForCompile({PlainText: this.codeForTest}).subscribe(
            response => {
              this.loading = true;
              this.compiled = true;
              this.notcompMsg = '';
              this.succMsg = response;
            },
            err => {
              this.loading = false;
              this.notcompiled = true;
              this.notcompMsg = err.error;
            },
            () => {
              this.loading = false;
            }
        );
    }
}

}
