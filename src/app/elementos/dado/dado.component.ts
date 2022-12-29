import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {

  @Input() number: Number = 0;
  @Output() randomNumber = new EventEmitter<Number>();

  lados=6;
  newNumber = 0; 

  numeroAleatorio() {
    
      var randomNumber = Math.floor(Math.random() * this.lados) + 1;
      

      if (randomNumber != this.newNumber){
      this.newNumber = randomNumber;
      this.number = this.newNumber;
      this.randomNumber.emit(this.number);
    
    } else if (randomNumber == this.newNumber){
      while(randomNumber == this.newNumber){
      var randomNumber = Math.floor(Math.random() * this.lados) + 1;}
      this.newNumber = randomNumber;
      this.number = this.newNumber;
      this.randomNumber.emit(this.number);
    } 
  
  
  }  


}
