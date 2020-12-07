import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/_root/app.component';
import { GridComponent } from './components/grid/grid.component';
import { WidgetContainerComponent } from './components/grid/widget-container/widget-container.component';

import { GridsterModule } from 'angular-gridster2';
import { GridService } from './components/grid/grid.service';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    WidgetContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    WidgetsModule
  ],
  providers: [
    GridService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
