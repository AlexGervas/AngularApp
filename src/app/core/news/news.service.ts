import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

/**
 * Эта часть нужна для если планируется сервис использовать только в app.component и больше нигде
 * Если планируется сервис использовать в других модулях и компонентах, то providedIn не нужен,
 * в таком случае сервис должен быть обязательно указан в providers в core.module.ts
 * @Injectable({
 *   providedIn: 'root'
 * })
 */

export interface Feed {
  [key: string]: any;
}

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  /** Вместо <any> лучше чтобы был какой-нибудь интерфейс, например, NewsItem[], раз ангуляре тайпскрипт желательно чтобы была типизация */
  getTopHeadlines(): Observable<any> {
    // apiKey желательно не быть здесь, желательно чтобы он был в HttpInterceptor где он будет автоматически добавлятся ко всем запросам к newsapi.org
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ru&apiKey=a3985037878a4117bec348bbc67881ba')
       // .map(response => response.json().data as Feed);
  }
}
