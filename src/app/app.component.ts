import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  nombre    : string = 'Capitán América';
  PI        : number = Math.PI;
  porcentaje: number = 0.234;
}
