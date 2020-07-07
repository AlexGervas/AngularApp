import { Component, OnDestroy, OnInit } from '@angular/core';
import { News2Item } from "../../core/models/news2-item";
import { NewsService } from "../../core/news/news.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'news-list',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit, OnDestroy {

  posts: News2Item[] = [];

  // Все http-запросы в ангуляре возвращают Observable, это потом Subscription,
  // у которых есть свои события типа complete (который означает что данные получены, подписка завершена) и многие другие
  // грубо говоря что-то типа Promise в javascript
  private subs: Subscription = new Subscription();

  constructor(private newsService: NewsService) {
  }

  /** Метод жизненного цикла компонента, который срабатывает при инициализации приложения,
   * сразу же отправляем запрос на получение новостей
   */
  ngOnInit(): void {
    this.loadTopHeadlines();
  }

  // Отписываемся от всех подписок разом, когда компонент уничтожается
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private loadTopHeadlines() {
    // Добавляем запрос в subs, чтобы в будущем можно было отписаться от него
    this.subs.add(this.newsService.getData().subscribe(news2Item => {
      console.log(news2Item);
      this.posts = news2Item;
    }));
  }

}
