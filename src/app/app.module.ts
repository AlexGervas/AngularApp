import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';

import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CompanyComponent } from './components/company/company.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  // Импортируем CoreModule вместе со всеми сервисами что там есть
  imports: [BrowserModule, FormsModule, NgbModule, HttpClientModule, CoreModule],
  declarations: [AppComponent, MenuComponent, CompanyComponent, ShopListComponent, MainPageComponent, NewsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
