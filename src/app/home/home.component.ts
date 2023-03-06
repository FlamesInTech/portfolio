import { Component, OnInit } from '@angular/core';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cover = 'assets/images/cover.png';
  song = 'assets/files/song.mp3';
  downloadPDF(){
    let link = document.createElement("a");
        link.download = "Resume-Shalom.pdf";
        link.href = "assets/files/Resume-Shalom.pdf";
        link.click();
  }
  
  constructor() { }

  ngOnInit(): void {
  } 
faYoutube = faYoutube;
} 