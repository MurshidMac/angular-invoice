import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrintPageComponent } from './print-page/print-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ToastrModule } from 'ngx-toastr';  

@NgModule({
  imports:      [ BrowserModule, FormsModule, ToastrModule ],
  declarations: [ AppComponent, PrintPageComponent, MainPageComponent, GridViewComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
