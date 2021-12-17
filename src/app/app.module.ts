import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GestionProjetsComponent } from './gestion-projets/gestion-projets.component';
import { MDBBootstrapModule,NavbarModule, WavesModule, ButtonsModule,IconsModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionEquipesComponent } from './gestion-equipes/gestion-equipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GestionProjetsComponent,
    ConfirmDialogComponent,
    SearchInputComponent,
    GestionEquipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule, 
    WavesModule, 
    ButtonsModule,
    IconsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    BrowserAnimationsModule,
    
 

  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
