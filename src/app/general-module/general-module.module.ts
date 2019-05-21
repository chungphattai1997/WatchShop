import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    LoginComponent, 
    SignInComponent, 
    SignUpComponent, ShowCartComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class GeneralModuleModule { }
