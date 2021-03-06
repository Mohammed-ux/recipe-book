import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutinModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard.servece';
import { SharedModulde } from './shared/shared-module';
import { ShoppingModule } from './shopping-list/shopping-module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutinModule,
    HttpClientModule,
    ShoppingModule,
    SharedModulde,
    AuthModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
