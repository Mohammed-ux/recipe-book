import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number
  editMode=false
  recipeForm:FormGroup
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=params['id']
        this.editMode=params['id']!=null;
        console.log(this.editMode)
        this.InitForm()
      }
    )
  }
  onSubmit(){
    /* const newRecipe=new Recipe(this.recipeForm.value['name'],
    this.recipeForm.value['description'],
    this.recipeForm.value['imagePath'],
    this.recipeForm.value['ingredients'])
 */
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }else{
this.recipeService.addRecipe(this.recipeForm.value);
    }
    console.log(this.recipeForm.value)
    this.onCancel();
  }
  onAddIngredient(){
   (<FormArray>this.recipeForm.get('ingredients')).push(
     new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount':new FormControl(null,[Validators.required,
        Validators.pattern(/^[1-9][0-9]*$/)])

     })
   )
  }

 private InitForm(){
   let recipeName='';
   let recipeDescripton='';
   let recipeImgPath=''
   let recipeIngredients=new FormArray([])
   if(this.editMode){
     const recipe=this.recipeService.getRecipeById(this.id)
     recipeName=recipe.name;
     recipeDescripton=recipe.description
     recipeImgPath=recipe.imagePath
     if(recipe['ingredients']){
       for (let igr of recipe.ingredients){
         recipeIngredients.push(
           new FormGroup({
             'name':new FormControl(igr.name,Validators.required),
             'amount':new FormControl(igr.amount,[Validators.required,
              Validators.pattern(/^[1-9][0-9]*$/)])
           })
         );
       }
     }
}
  this.recipeForm=new FormGroup({
    'name': new FormControl(recipeName,Validators.required),
    'imagePath': new FormControl(recipeImgPath,Validators.required),
    'description': new FormControl(recipeDescripton,Validators.required),
    'ingredients':recipeIngredients
  })
 }
 onCancel(){
   this.router.navigate(['../'],{relativeTo:this.route})
 }
 onDeleteIngredient(index:number){
   (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
 }
}
