import { Component ,OnInit} from '@angular/core';
import { Users } from '../models/users';
import { AppService } from '../app.service';
import { Recipes } from '../models/Recipes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: any
  posts: any[] = [];


constructor(private appService:AppService){}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.appService.getData().subscribe((data:Recipes) => {
       // this.posts = data;
        this.recipes = data.recipes;
        console.log( this.posts);
      },
      (error) => {
        console.error('error' , error);
      }
    );
  }






val:boolean = false;
name:string = 'write';
color:string = 'red';

  content:Users[]=[
    { name: 'John Smith', age: 35, role: 'Head Chef' },
    { name: 'Emily Johnson', age: 28, role: 'Sous Chef' },
    { name: 'Michael Brown', age: 40, role: 'Kitchen Manager' },
    { name: 'Sarah White', age: 25, role: 'Pastry Chef' },
    { name: 'David Wilson', age: 30, role: 'Dishwasher' }

  ]
 
  change(){
    this.val = !this.val;
    this.name = this.val ? 'write' : 'read';
  }

}
