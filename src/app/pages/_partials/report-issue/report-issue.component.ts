import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { NavbarComponent } from '../../../blueprint/navbar/navbar.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendService } from '../../../core/services/backend/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.scss']
})
export class ReportIssueComponent implements OnInit, AfterViewInit {
  issueForm: FormGroup;
  issueImgSrc = '';
  issueSubmited = false;
  issueRejected = false;
  fileSelectMsg = 'No file selected yet.';
  fileUploadMsg = 'No file uploaded yet.';
  disabled = false;

  constructor(public navbarComponent: NavbarComponent, private fb: FormBuilder,private backendService: BackendService, 
    private router: Router) { 
    this.issueForm = fb.group({
      'email': [{value: this.navbarComponent.storedUser.email, disabled: true}, Validators.required],
      'issuePicture': [null, Validators.nullValidator],
      'message': [null, [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    this.issueImgSrc = '../../../../assets/images/no-profile-img.png';
  }

  ngAfterViewInit(): void {
    $('#openReportIssueModal').trigger('click');
  }

  sendIssue() {
    // this.loading = true;
    this.backendService
    .sendIssue({SenderEmail: this.navbarComponent.storedUser.email, Text: this.issueForm.get('message').value, Img2Base64: this.issueImgSrc})
      .subscribe(
        response => {},
        error => {
            this.router.navigate(['/server-alert']);
            this.issueRejected = true;
        },
        () => {
          this.issueSubmited = true;
        });
        setTimeout(() => {
          this.issueSubmited = false;
          this.issueRejected = false;
          this.navbarComponent.reportIssueModalVisibility = false;
        }, 4000);
  }

  clearPicture() {
    this.issueImgSrc = '../../../../assets/images/no-profile-img.png';
  }

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.resizeImage(file, 800, 600).then(blob => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.issueImgSrc = reader.result.toString();
        };
        reader.readAsDataURL(blob);
      },
      error => {
        console.error('Photo error!', error);
      });
    }
  }

  resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
            const width = image.width;
            const height = image.height;

            if (width <= maxWidth && height <= maxHeight) {
                resolve(file);
            }

            let newWidth;
            let newHeight;

            if (width > height) {
                newHeight = height * (maxWidth / width);
                newWidth = maxWidth;
            } else {
                newWidth = width * (maxHeight / height);
                newHeight = maxHeight;
            }

            const canvas = document.createElement('canvas');
            canvas.width = newWidth;
            canvas.height = newHeight;

            const context = canvas.getContext('2d');

            context.drawImage(image, 0, 0, newWidth, newHeight);

            canvas.toBlob(resolve, file.type);
        };
        image.onerror = reject;
    });
  }
}
