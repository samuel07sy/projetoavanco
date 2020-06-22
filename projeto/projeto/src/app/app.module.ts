import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaModule } from './pagina/PaginaModule';
import { MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginaModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
    
   
  ],
  providers: [],
  schemas:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
