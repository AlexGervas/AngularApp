import { NgModule } from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/menu/menu.component";
import { CompanyComponent } from "./components/company/company.component";
import { ShopListComponent } from "./pages/shop-list/shop-list.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { NewsComponent } from "./pages/news/news.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreModule } from "./core/core.module";

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule, NgbModule, HttpClientModule, CoreModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent, MenuComponent, CompanyComponent, ShopListComponent, MainPageComponent, NewsComponent, NotFoundComponent]
})

export class AppModule {
}
