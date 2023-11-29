import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  public result:number = 0;
  constructor() { }

  public add(a: number, b: number): number {
    return a + b;
  }

  ngOnInit(): void {
    this.result = this.add(5,3)
  }
}
