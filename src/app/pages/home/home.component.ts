import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticadorComponent } from '../../tools/authenticador/authenticador.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private loginSheet: MatBottomSheet){}

  ngOnInit(): void{
  }

  onGetStartedClick(){
    this.loginSheet.open(AuthenticadorComponent);
  }

}
