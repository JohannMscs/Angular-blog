import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [ ],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string =""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""

  constructor(){

  }
  ngOnInit(){

  }

}
