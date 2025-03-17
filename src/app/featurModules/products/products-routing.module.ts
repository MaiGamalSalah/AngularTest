import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreatComponent } from './create/creat.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [


  {
    path:'',redirectTo:'read',pathMatch:'full'
  },


      { path: 'read', component: ReadComponent },
      { path: 'create', component: CreatComponent },
      { path: 'update/:id', component: UpdateComponent },
      {path:'delete/:id',component:UpdateComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
