import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';

@NgModule({
  // Импортируем CoreModule вместе со всеми сервисами что там есть
  imports: [BrowserModule, FormsModule, NgbModule, HttpClientModule, CoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
