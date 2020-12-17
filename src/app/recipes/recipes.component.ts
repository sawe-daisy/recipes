import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeWasSelected: Recipe;

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipeWasSelected)
  }

}
