import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  home = 'assets/images/DAST_HOME.png';
  about = 'assets/images/DAST_ABOUT.png';
  account = 'assets/images/DAST_ACCOUNT.png';
  why = 'assets/images/WHY_DAST.png';
  cover = 'assets/images/cover.png';
  real1 = 'assets/images/realestate-home.png';
  real2 = 'assets/images/realestate-home2.png';
  robo1 = 'assets/images/robofriends1.png';
  robo2 = 'assets/images/robofriends2.png';
  robo3 = 'assets/images/robofriends3.png';
  julia1 = 'assets/images/digitajulia1.png';
  julia2 = 'assets/images/digitajulia2.png';
  julia3 = 'assets/images/digitajulia3.png';
  constructor() { }

  ngOnInit(): void {
  }

}
