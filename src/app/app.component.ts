import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Simple-Calculator';
  public number1:number=0;
  public number2:number=0;
  public result:number=0;

  add(){
    this.result=this.number1 + this.number2;
  }

  sub(){
    this.result=this.number1 - this.number2;
  }

  mul(){
    this.result=this.number1 * this.number2;
  }

  div(){
    this.result=this.number1 / this.number2;
  }
}
