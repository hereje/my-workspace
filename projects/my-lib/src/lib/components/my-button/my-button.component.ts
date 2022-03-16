import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {

  constructor() { }
  @Input()
  text!: string;
  ngOnInit(): void {
  }

}
