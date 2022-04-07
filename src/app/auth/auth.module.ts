import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { RegistrationComponent } from './components/registration/registration.component';

const router: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(router)],
  providers: [AuthService],
  exports: [SharedModule, RouterModule],
})
export class AuthModule {}
