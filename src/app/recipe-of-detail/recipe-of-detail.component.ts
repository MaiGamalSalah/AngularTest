import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-of-detail',
  templateUrl: './recipe-of-detail.component.html',
  styleUrls: ['./recipe-of-detail.component.scss']
})
export class RecipeOfDetailComponent implements OnInit {

  loading:boolean = true;
  RecipesId:any;recipesDetails:any;
  constructor(private apiRecipes:AppService  , private activatedRoute:ActivatedRoute)  { }

  ngOnInit(): void {
    this.RecipesId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getRecipeDetails(this.RecipesId);
  }



  getRecipeDetails(id: string) {
    console.log('Fetching details for recipe ID:', id);  
    this.apiRecipes.getRecipeDetails(id).subscribe(
        (data) => {
            this.recipesDetails = data;
            this.loading = false;
            console.log('Recipe Details:', this.recipesDetails);  
        },
        (error) => { 
            console.error('Error fetching recipe details:', error); 
        }
    );
}



}