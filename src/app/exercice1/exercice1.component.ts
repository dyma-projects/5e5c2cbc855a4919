import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  isShow = false;
  public name: string;

  toggledisplay() {
    this.isShow = !this.isShow;
  }
  constructor() {
    this.name = 'entrez votre texte ici';
  }

  ngOnInit(): void {
  }

}
