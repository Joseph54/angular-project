import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
appTitle = 'movie finder';
  constructor(private data: DataService) { }

  ngOnInit() {
  }
/*
firstClick() {
    console.log('hello');
}*/
  firstClick() {
    this.data.firstClick();
  }

}
