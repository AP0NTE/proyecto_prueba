import { Component, OnInit } from '@angular/core';
import {MyDBService} from '../services/my-db.service'
import { MyDB } from '../models/my-db';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
myDBs:MyDB[];
constructor(private myDBservice:MyDBService)
{ }
ngOnInit() {
this.getAll();
}
getAll(){
this.myDBservice.getAll().subscribe(myDBs=>this.myDBs=myDBs);
}
}
