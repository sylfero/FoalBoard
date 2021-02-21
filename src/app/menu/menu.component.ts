import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private audio = new Audio();

  constructor() { }

  ngOnInit(): void {
  }

  playSound(sound){
    this.audio.src = `assets/${sound}.wav`;
    this.audio.load();
    this.audio.play();
  }
}
