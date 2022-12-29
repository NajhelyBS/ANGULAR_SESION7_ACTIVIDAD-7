import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {

  @Input() number:Number = 0;
  @Output() randomNumber = new EventEmitter<Number>();


  lados = 6;

  numeroAleatorio(){
    

    var randomNumber = Math.floor(Math.random() * this.lados) + 1;
    alert(randomNumber);
    this.number = randomNumber;
    this. randomNumber.emit(this.number);

  }

 

}
