import { NgModule } from '@angular/core';
import {   Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
const appRouter:Routes=[
    //{path: '', redirectTo:"/recipes" ,pathMatch:'full'},
    {path: '', component:HomeComponent},
    {path: 'recipes', loadChildren:'./recipes/recipes.module#RecipesModule'},
    {path: 'shopping-list', component:ShoppingListComponent },
]
@NgModule({
    imports:[RouterModule.forRoot(appRouter, {preloadingStrategy: PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutinModule{
    
}