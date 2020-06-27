import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const route:Routes=[
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
]
@NgModule({
imports:[RouterModule.forChild(route)],
exports: [RouterModule]
})
export class AuthRoutingModule{

}