import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit{

  constructor(private apiService:ApiServiceService){}
  punchline:string ="";
  setup:string=""

  ngOnInit(): void {
    this.apiService.getJoke()?.subscribe(res => {
      console.log(res[0])
      this.punchline = res[0].punchline;
      this.setup = res[0].setup
    })
  }

  
}
