import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FirebaseTSApp} from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from '../environments/environment';

import { MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatBottomSheetModule} from  '@angular/material/bottom-sheet';
import { MatCardModule} from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],

})
export class AppComponent {
  title = 'proyectofinal';

  constructor(){
    FirebaseTSApp.init(environment.firebaseConfig);
  }
}
