import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private http: Http) {
    this.fetchData();
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number ) {
    return this.recipes[id];
  }

  delete(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put('https://recipebook-8f3bc.firebaseio.com/recipes.json', body, {
      headers: headers
    });
  }

  fetchData() {
    return this.http.get('https://recipebook-8f3bc.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }
}
