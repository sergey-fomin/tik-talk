import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'tt-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public form: FormGroup = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
  })

  protected readonly authService = inject(AuthService)

  public onSubmit(): void {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe()
    }
  }

}
