import { Component, OnInit } from '@angular/core';
import {MyDBService } from '../services/my-db.service';
import { MyDB } from '../models/my-db';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
    constructor(private myDBService: MyDBService) { }
    myDB: MyDB;
    ngOnInit() {
    this.myDB = { id: 0, name: '', text: '',};
    }
    add() {
    this.myDBService.addMyDB(this.myDB)
    .subscribe(myDB => {
    alert('Se agrego una nueva tarea')
    
    });
    }
}
