import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-7';

  lados = 6;

  numeroAleatorio(){
    
    var randomNumber = Math.floor(Math.random() * this.lados) + 1;
    
    alert(randomNumber);

  }

  }

