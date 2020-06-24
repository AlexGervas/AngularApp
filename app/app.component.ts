import { NewsService } from './core/news/news.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsItem } from './core/models/news-item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'purchase-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  text: string;
  price: number = 0;

  items: NewsItem[] =
    [
      {purchase: "Хлеб", done: false, price: 15.9},
      {purchase: "Масло", done: false, price: 60},
      {purchase: "Картофель", done: true, price: 22.6},
      {purchase: "Сыр", done: false, price: 310}
    ];

  // Все http-запросы в ангуляре возвращают Observable, это потом Subscription,
  // у которых есть свои события типа complete (который означает что данные получены, подписка завершена) и многие другие
  // грубо говоря что-то типа Promise в javascript
  private subs: Subscription = new Subscription();

  constructor(private newsService: NewsService) { }

  /** Метод жизненного цикла компонента, который срабатывает при инициализации приложения,
   * сразу же отправляем запрос на получение новостей
   */
  ngOnInit() {
    this.loadTopHeadlines();
  }

  // Отписываемся от всех подписок разом, когда компонент уничтожается
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  addItem(text: string, price: number): void {

    if (text == null || text.trim() == "" || price == null)
      return;
    this.items.push({ purchase: text, price: price, done: false });
  }

  private loadTopHeadlines() {
    // Добавляем запрос в subs, чтобы в будущем можно было отписаться от него
    this.subs.add(this.newsService.getTopHeadlines().subscribe(newsItems => {
      console.log(newsItems);
    }));
  }
}
