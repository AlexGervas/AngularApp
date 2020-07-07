import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'purchase-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  value: number;

  /** Метод жизненного цикла компонента, который срабатывает при инициализации приложения,
   * сразу же отправляем запрос на получение новостей
   */
  ngOnInit() {
  }

  addSwitch(event: number) {
    this.value = event;
  }

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
}
