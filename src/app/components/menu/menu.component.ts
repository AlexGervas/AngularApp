import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'menu_header',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() page: number
  @Output() onClick = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

}
