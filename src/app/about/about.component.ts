import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutData = 'about component';

  logAbout(e: any){
    alert('About component');
    console.log(e);
  }

}
