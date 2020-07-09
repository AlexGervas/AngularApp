import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewsComponent } from './pages/news/news.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// определение маршрутов
const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'news', component: NewsComponent},
  {path: 'shop-list', component: ShopListComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
