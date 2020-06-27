import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  /* @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef */
  //@Output() ingredientAdded=new EventEmitter<Ingredient>();
  @ViewChild('f') slForm:NgForm
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;
  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription=this.shoppinglistService.startedEditing.subscribe(
      (id:number)=>{
        this.editMode=true;
        this.editedItemIndex=id;
        this.editedItem=this.shoppinglistService.getIngredient(id);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    )
  }
  onAddItem(form:NgForm){
    /* const nm=this.nameInputRef.nativeElement.value
    console.log(nm);
    const am=this.amountInputRef.nativeElement.value
    console.log(am);
    const igr=new Ingredient(nm,am);
    console.log(igr);
    this.ingredientAdded.emit(igr); */
    //this.ingredientAdded.emit(new Ingredient(name.value,amount.value));
    const from=form.value;
    const newingredient=new Ingredient(from.name,from.amount)
    if(this.editMode){
      this.shoppinglistService.updateIngredient(this.editedItemIndex,newingredient)
    }
    else{
      this.shoppinglistService.addIngredient(newingredient);
    }
    this.editMode=false
    this.slForm.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onClear(){
    this.slForm.reset()
    this.editMode=false
  }
  onDelete(){
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.onClear()
  }
}
