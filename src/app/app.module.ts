import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Agregar estos imports y la funcion registerLocaleData para usar las fechas en español y la moneda de uruguay
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-UY';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeEs);
registerLocaleData(localeFr);
// hasta aqui todo lo que se agrega para usar la moneda de uruguay, junto con el import de LOCALE_ID y el providers

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
     { provide: LOCALE_ID,
       useValue: 'es-UY' 
     }    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
