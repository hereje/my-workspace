import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  

  @Input()
  items!: {key: string, value: string}[];
  constructor() { }

  ngOnInit(): void {
  }

}
