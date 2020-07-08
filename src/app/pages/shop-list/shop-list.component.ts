import { Component, OnInit } from '@angular/core';
import { NewsItem } from "../../core/models/news-item";

@Component({
  selector: 'shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  text: string;
  price: number = 0;

  items: NewsItem[] =
    [
      {purchase: "Хлеб", done: false, price: 15.9},
      {purchase: "Масло", done: false, price: 60},
      {purchase: "Картофель", done: true, price: 22.6},
      {purchase: "Сыр", done: false, price: 310}
    ];

  addItem(text: string, price: number): void {

    if (text == null || text.trim() == "" || price == null)
      return;
    this.items.push({purchase: text, price: price, done: false});
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
