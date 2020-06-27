import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
@Component ({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
 export class HeaderComponent{
     constructor(private dst:DataStorageService,public auth:AuthService){}

    onSaveData(){
     this.dst.storeRecipe().subscribe(
         (response:Response)=>{console.log('recipe'+response)},
     )
     this.dst.storeIngredients().subscribe(
         (response:Response)=>{console.log('ingredient'+response)},
     )
    }
    onFetchData(){
        this.dst.getRecipes()
        this.dst.getIngredients()
    }
    onLogOut(){
        this.auth.logOut()
    }
}