import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FruitManagerComponent } from './fruit-manager/fruit-manager.component';
import { HeaderComponent } from './header/header.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
import { FruitCardComponent } from './fruit-card/fruit-card.component';
import { IconComponent } from './icon/icon.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FruitManagerComponent,
    HeaderComponent,
    FruitListComponent,
    AddFruitComponent,
    FruitCardComponent,
    IconComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
