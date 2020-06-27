import { HttpClient } from '@angular/common/http'
import { RecipeService } from '../recipes/recipe.service'
import { Injectable } from '@angular/core'
import { Recipe } from '../recipes/recipe.model'
import 'rxjs/Rx'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Ingredient } from './ingredient.model'
import { AuthService } from '../auth/auth.service'
@Injectable()
export class DataStorageService{
constructor(private httpclient:HttpClient,private recipeService:RecipeService,
    private ingredientService:ShoppingListService,private auth:AuthService){}
    storeRecipe(){
        const token=this.auth.getToken()
    return this.httpclient.
    put('https://recipe-project-b1e10.firebaseio.com/recipe.json?auth='+token,
    this.recipeService.getRecipe())
    }
    getRecipes(){
        const token=this.auth.getToken()
        this.httpclient.
        get<Recipe[]>('https://recipe-project-b1e10.firebaseio.com/recipe.json?auth='+token).map(
            (recipes:Recipe[])=>{
                for (let x of recipes){
                    if(!x['ingredients']){
                        x['ingredients']=[]
                    }
                    return recipes
                }
            }
        ).subscribe(
            (recipes:Recipe[])=>{
                this.recipeService.setRecipes(recipes)
            }
        )
    }
    storeIngredients(){
        const token=this.auth.getToken()
        return this.httpclient.
        put('https://recipe-project-b1e10.firebaseio.com/ingredient.json?auth='+token,
        this.ingredientService.getINgredient())
        
    }
    getIngredients(){
        const token=this.auth.getToken()
        this.httpclient
        .get<Ingredient[]>('https://recipe-project-b1e10.firebaseio.com/ingredient.json?auth='+token).map(
            (ingredients:Ingredient[])=>{
                /* for (let x of ingredients){
                    if(!x['ingredients']){
                        x['ingredients']=[]
                    }
                    return recipes
                } */
                return ingredients
            }
        ).subscribe(
            (ingredients:Ingredient[])=>{
                this.ingredientService.setIngredient(ingredients)
            }
        )
    }

}
/* this.httpclient.get('https://recipe-project-b1e10.firebaseio.com/recipe.json').map(
            (response:Response)=>{
                const recipes:Recipe[]=response.json()
                for (let x of recipes){
                    if(!x['ingredients']){
                        x['ingredients']=[]
                    }
                    return recipes
                }
            }
        ).subscribe(
            (response:Response)=>{
                this.recipeService.setRecipes(recipes)
            }
        )
    }
 */