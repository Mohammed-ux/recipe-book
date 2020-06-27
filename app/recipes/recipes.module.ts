import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesRoutingModule } from './recipes-routing';
import { SharedModulde } from '../shared/shared-module';

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeStartComponent,
        RecipesListComponent,
        RecipeEditComponent,
        RecipesDetailComponent,
        RecipesItemComponent,
    ],
    imports:[
    ReactiveFormsModule,
    CommonModule,
    RecipesRoutingModule,
    SharedModulde
    ]
})
export class RecipesModule{

}