import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  nombre    : string  = 'Capitán América';
  nombre2   : string  = 'javIeR eStéVeZ sOareZ';
  PI        : number  = Math.PI;
  porcentaje: number  = 0.234;
  salario   : number  = 1234.5;
  fecha     : Date    = new Date();
  activar   : boolean = true;

  idioma    : string = 'es-UY';
  videoUrl  : string = 'https://www.youtube.com/embed/eHtU0-TfDGc';

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('Llegaron los datos');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
