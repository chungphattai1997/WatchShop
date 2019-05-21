import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { ListProductAdComponent } from './admin-module/list-product-ad/list-product-ad.component';
import { LoginAdComponent } from './admin-module/login-ad/login-ad.component';
import { LoginGuard } from './_core/guard/login.guard';
import { ListUserAdComponent } from './admin-module/list-user-ad/list-user-ad.component';
import { UserModuleComponent } from './user-module/user-module.component';
import { UserModuleModule } from './user-module/user-module.module';

const appRoutes:Routes = [
  // {path:'', loadChildren: './user-module/user-module.module#UserModuleModule'},
  {path:'', component: UserModuleComponent},
  {path:'admin', component: AdminModuleComponent, children:[
    {path: '', component: ListProductAdComponent},
    {path: 'user', component: ListUserAdComponent}
  ], canActivate: [
    LoginGuard
  ]},
  {path: 'login', component: LoginAdComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminModuleModule,
    UserModuleModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
