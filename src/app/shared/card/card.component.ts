import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() cardTitle: string ='';
@Input() cardText: string = '';
@Input() cardImageUrl: string = '';
@Input()btnText: string = '';
@Input()id:number = 0;

@Output() buttonClicked = new EventEmitter<void>();


constructor(private router:Router) { }

routerNavigatRecipeDetail() {
  //this.buttonClicked.emit(); 
  this.router.navigate(['/recipe',this.id]);

}
}
