import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _homeService: HomeService, private _router: Router) { }
  public data;

  ngOnInit() {
    this._homeService.getCardDetails().subscribe(
      data => {
        this.data = data;
        
        console.log(this.data)
      },
      error => console.log(error.message)
    )
  }

}

