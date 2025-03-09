import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ParentComponent } from './parent/parent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeOfDetailComponent } from './recipe-of-detail/recipe-of-detail.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'

  }
,
  {
    path:'home',component:HomeComponent
  },
  {
    path:'recipe/:id',component:RecipeOfDetailComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ParentComponent
  }
  ,
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
