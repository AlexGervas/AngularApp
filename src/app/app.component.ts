import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NewsService } from './core/news/news.service';
import { NewsItem } from './core/models/news-item';
import { Observable, Subscription } from 'rxjs';
import { News2Item } from "./core/models/news2-item";

@Component({
  selector: 'purchase-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsService]
})

export class AppComponent implements OnInit, OnDestroy {

  posts: News2Item[] = [];
  value: number;

  // Все http-запросы в ангуляре возвращают Observable, это потом Subscription,
  // у которых есть свои события типа complete (который означает что данные получены, подписка завершена) и многие другие
  // грубо говоря что-то типа Promise в javascript
  private subs: Subscription = new Subscription();

  constructor(private newsService: NewsService) {
  }

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

  addSwitch(event: number) {
    this.value = event;
  }

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }

  private loadTopHeadlines() {
    // Добавляем запрос в subs, чтобы в будущем можно было отписаться от него
    this.subs.add(this.newsService.getData().subscribe(news2Item => {
      console.log(news2Item);
      this.posts = news2Item;
    }));
  }
}
