import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  audio: any;

  constructor(
    public http: HttpClient,
    public route: Router
  ) { }

  ngOnInit() {

  }

  playMusic(){
    this.audio = new Audio();
    this.audio.src="../../assets/canciones/musica/lukasGrahan-7years.mp4"
    this.audio.load();
    this.audio.play();
  }

  pauseMusic(){
    this.audio.pause();
  }

  playMusic2(){
    this.audio = new Audio();
    this.audio.src="../../assets/canciones/musica/hamsKadir-aras.mp4"
    this.audio.load();
    this.audio.play();
  }

  pauseMusic2(){
    this.audio.pause();
  }

  playMusic3(){
    this.audio = new Audio();
    this.audio.src="../../assets/canciones/musica/CALLE.mpeg"
    this.audio.load();
    this.audio.play();
  }

  pauseMusic3(){
    this.audio.pause();
  }

  playMusic4(){
    this.audio = new Audio();
    this.audio.src="../../assets/canciones/musica/FLOW.mp4"
    this.audio.load();
    this.audio.play();
  }

  pauseMusic4(){
    this.audio.pause();
  }

  playMusic5(){
    this.audio = new Audio();
    this.audio.src="../../assets/canciones/musica/parasyte.mp4"
    this.audio.load();
    this.audio.play();
  }

  pauseMusic5(){
    this.audio.pause();
  }

  

}
