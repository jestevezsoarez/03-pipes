import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {

    if( activar ) {
      let longitud = value.length;
      value = '';
      for( let i = 0; i < longitud; i++ ) {
        value += '*';
      }
    }
    
    return value;
  }

}
