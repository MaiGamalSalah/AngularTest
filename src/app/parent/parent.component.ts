import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentData = 'parent component';
  logParent(e: any){
    alert('Parent component');
    console.log(e);
  }
}
