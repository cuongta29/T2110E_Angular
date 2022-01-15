import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { AddTextDirective } from './add-text.directive';
import {FormsModule} from "@angular/forms";
import{InputEmailComponent} from "./input-email/input-email.component";
import {InputPasswordComponent} from "./input-password/input-password.component";
import {FormComponent} from "./form/form.component";
import {InputUsernameComponent} from "./input-username/input-username.component";
import { InputRepasswordComponent } from './input-repassword/input-repassword.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from "@angular/router";
import { FirstPageComponent } from './first-page/first-page.component';
import {Listproduct2Component} from "./component/listproduct/listproduct2.component";
import {CreateProductComponent} from "./component/create-product/create-product.component";
const AppRouters: Routes=[
  {path:"", component:GetStartedComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    NewCmpComponent,
    AddTextDirective,
    InputEmailComponent,
    InputPasswordComponent,
    FormComponent,
    InputUsernameComponent,
    InputRepasswordComponent,
    GetStartedComponent,
    LoginComponent,
    RegisterComponent,
    FirstPageComponent,
    Listproduct2Component,
    CreateProductComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
