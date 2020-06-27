import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  subscription:Subscription
  constructor(private recipeService: RecipeService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription=this.recipeService.recipesChanged.subscribe(
      (recipes1:Recipe[])=>{
        this.recipes=recipes1
      }
      )
      this.recipes=this.recipeService.getRecipe();
    }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})

  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
