import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public nombre ="Aponte pertuz"
  public CambiarNombre(){
    this.nombre="Tu madre";
  }
  public LstMessages: string[]=["Hola mundo","pepe pecas","pica papas","otro"];
  constructor() {

   }
  ngOnInit() {
  }

}
