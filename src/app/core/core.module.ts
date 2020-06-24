import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from './news/news.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NewsService
  ]
})
export class CoreModule {
  // Проверка импортирован CoreModule или нет
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
