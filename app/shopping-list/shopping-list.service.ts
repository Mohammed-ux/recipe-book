import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{
    startedEditing=new Subject<number>();
    ingredientsChanged=new Subject<Ingredient[]>();
    private ingredients:Ingredient[]=[
        new Ingredient('Apple',5),
        new Ingredient('Tomateos',20)
      ];
    getIngredient(id:number){
        return this.ingredients[id];
    }
    getINgredient(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredient:Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(id:number,newIngredient:Ingredient){
        this.ingredients[id]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    deleteIngredient(id:number){
        this.ingredients.splice(id,1);
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    setIngredient(ingredient:Ingredient[]){
        this.ingredients=ingredient
        this.ingredientsChanged.next(this.ingredients)
    }
}