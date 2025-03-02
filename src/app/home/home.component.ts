import { Component } from '@angular/core';
import { Users } from '../models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
val:boolean = false;
name:string = 'write';
color:string = 'red';

  content:Users[]=[
    {name:'mohamed',age:25,job:'developer'},
    {name:'ahmed',age:30,job:'designer'},
    {name:'ali',age:35,job:'manager'},
    {name:'khaled',age:40,job:'developer'},

  ]
  change(){
    this.val = !this.val;
    this.name = this.val ? 'write' : 'read';
  }

}
