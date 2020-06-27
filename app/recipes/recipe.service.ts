import { Recipe } from './recipe.model'
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();
    recipesChanged=new Subject<Recipe[]>();
    recipes: Recipe[] = [
        new Recipe('Big Fat Burger',
            'What else you need to say',
            'https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('tasty scknitzel',
            'A super-tasty scknitzel-just awesome!',
            'https://thumbs.dreamstime.com/b/grilled-pork-meat-french-fries-white-plate-34705487.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])

    ]
    constructor(private slServices: ShoppingListService) { }
    getRecipe() {
        return this.recipes.slice();
    }
    addIngredientsRecipesToShoppingList(ingredient: Ingredient[]) {
        this.slServices.addIngredients(ingredient);
    }
    getRecipeById(id: number) {
        return this.recipes[id];
    }
    addRecipe(recipe:Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number,newRecipe :Recipe){
 this.recipes[index]=newRecipe
this.recipesChanged.next(this.recipes.slice());
    }
    deleteReciep(index:number){
        this.recipes.splice(index,1)
        this.recipesChanged.next(this.recipes.slice());
    }
   setRecipes(recipes:Recipe[]){
       this.recipes=recipes,
       this.recipesChanged.next(this.recipes.slice());
   }
}