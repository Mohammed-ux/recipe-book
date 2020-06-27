import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
ingredients:Ingredient[]
private subscription:Subscription
  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppinglistService.getINgredient();
    this.subscription=this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredient:Ingredient[])=>{this.ingredients=ingredient}
    )
  }
  ngOnDestroy(){
   this.subscription.unsubscribe();
  }
  onEditItem(id:number){
   this.shoppinglistService.startedEditing.next(id);
  }
  /* onIngredientAdded(ingredient:Ingredient){
this.ingredients.push(ingredient);
  } */
}
