import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../core/services/backend/backend.service';
import { ErrorHandlerService } from '../../../../core/services/error-handler/error-handler.service';
import { Router } from '../../../../../../node_modules/@angular/router';
import { HeaderService } from '../../../../core/services/header/header.service';
import { UserDataService } from '../../../../core/services/user-data/user-data.service';
import { UserViewModel } from '../../../../core/models/user-view-model.module';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  retryFunction = null;
  loading = false;
  user: any;
  notificationFlagPass = false;
  notificationFlagUpdate = false;
  notificationFlagEmail = false;
  errorMsg = '';
  profileImgSrc = '';

  // Update password fields
  newPassword = '';
  confirmedPassword = '';

  // Update email
  newEmail = '';

  constructor(private backendService: BackendService, private errorHandlerService: ErrorHandlerService,
              private router: Router, private headerService: HeaderService, private userDataService: UserDataService) { }

  ngOnInit() {
    this.loading = true;
    // this.retryFunction = this.ngOnInit.bind(this);
    this.backendService.getCurrentUser()
      .subscribe(
      response => {
        this.handleSuccess(response);
      },
      error => {
        this.handleError(error);
      }
    );
  }

  handleSuccess(response): void {
    this.user = response.body;
    this.userDataService.setUserData(this.user as UserViewModel);
    if (this.user.image == null) {
      this.profileImgSrc = '../../../../assets/images/no-profile-img.png';
    } else {
      this.profileImgSrc = this.user.image;
    }
    this.loading = false;
  }

  handleError(error): void {
    this.loading = false;
    this.errorMsg = error.message;
    setTimeout(() => {
      this.headerService.clearUserToken();
      this.router.navigate(['/login']);
    }, 1500);
  }

  updatePassword(ngForm) {
    if (this.newPassword !== this.confirmedPassword) {
      this.errorMsg = 'Confirm password doesn\'t match!';
    } else {
      this.loading = true;
      this.backendService.
          updatePassword({password: this.confirmedPassword}, this.headerService.pickUserToken()).subscribe(
          response => {},
          error => {
              this.router.navigate(['/server-alert']);
          },
          () => {
            this.notificationFlagPass = true;
            this.errorMsg = '';
            ngForm.reset();
            this.loading = false;
            setTimeout(() => {
              this.notificationFlagPass = false;
            }, 1500);
          }
      );
    }
  }

  changeEmail(ngForm) {
    this.loading = true;
      this.backendService.
          updateEmail({email: this.newEmail}, this.headerService.pickUserToken()).subscribe(
          response => {},
          error => {
              this.router.navigate(['/server-alert']);
          },
          () => {
            this.notificationFlagEmail = true;
            ngForm.reset();
            this.loading = false;
            setTimeout(() => {
              this.notificationFlagEmail = false;
            }, 2000);
            location.reload();
          }
      );
  }

  onFileSelected(event, ngForm) {
    if (event.target.files.length > 0) {
      this.loading = true;
      const file = event.target.files[0];
      this.resizeImage(file, 800, 600).then(blob => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImgSrc = reader.result.toString();
          this.user.image = reader.result;
          ngForm.form.markAsDirty();
          this.loading = false;
        };
        reader.readAsDataURL(blob);
      },
      error => {
        console.error('Photo error!', error);
      });
    }
  }

  updateProfile(ngForm) {
    this.loading = true;
    this.backendService.
        updateProfileInfo(
          {FirstName: this.user.first_name, LastName: this.user.last_name, Username: this.user.username, Img2Base64: this.user.image},
          this.headerService.pickUserToken()).subscribe(
        response => {},
        error => {
            this.router.navigate(['/server-alert']);
        },
        () => {
          this.notificationFlagUpdate = true;
          this.errorMsg = '';
          ngForm.form.markAsPristine();
          this.loading = false;
          setTimeout(() => {
            this.notificationFlagUpdate = false;
          }, 2000);
          location.reload();
        }
    );
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
