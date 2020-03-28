import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  public pageHeading:string;

  constructor(private _activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params => {
      this.pageHeading = params.get('card');
      
    })
  }

}
