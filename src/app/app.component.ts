import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-7';

  numeroAleatorio(){
    var dado;
    lados: 6;

    var randomNumber = Math.floor(Math.random() * this.lados) + 1;
    return randomNumber;
    
  }

}
