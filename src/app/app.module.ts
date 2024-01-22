import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { FormsModule } from '@angular/forms';

// class dec
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    ProductsListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
