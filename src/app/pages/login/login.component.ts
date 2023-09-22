import { AuthModel, PrivatesRoutes, PublicRoutes } from '@/models';
import { AuthService } from '@/services';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  authServices = inject(AuthService);

  loading = false;

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (!this.loginForm.valid) {
      console.error('Invalid form');

      return;
    }
    let username = this.loginForm.get('username')!.value || '';
    let password = this.loginForm.get('password')!.value || '';

    console.log(`Nombre de Usuario: ${username}`);
    console.log(`Contraseña: ${password}`);

    username = 'testangular';
    password = 'L@as.W0rd3p9o1';

    this.loading = true;
    this.authServices.login(username, password).subscribe(
      (response: AuthModel) => {
        console.log(response);
        const { accessToken, refreshToken } = response;
        this.authServices.saveTokens(accessToken, refreshToken);
        this.router.navigateByUrl('admin');
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        console.error(error);
      }
    );
  }

  onCancel() {
    this.router.navigate(['' + PublicRoutes.HOME]);
  }
}
