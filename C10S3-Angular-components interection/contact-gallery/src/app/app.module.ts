import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { IconComponent } from './icon/icon.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { ContantContainerComponent } from './contant-container/contant-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactCardComponent,
    IconComponent,
    SearchComponent,
    SidebarComponent,
    SidebarItemComponent,
    ContantContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
