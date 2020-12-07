import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarWidgetComponent } from './bar-widget/bar-widget.component';
import { LineWidgetComponent } from './line-widget/line-widget.component';
import { AreaWidgetComponent } from './area-widget/area-widget.component';
import { RadarWidgetComponent } from './radar-widget/radar-widget.component';

@NgModule({
  declarations: [
    BarWidgetComponent,
    LineWidgetComponent,
    AreaWidgetComponent,
    RadarWidgetComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarWidgetComponent,
    LineWidgetComponent,
    AreaWidgetComponent,
    RadarWidgetComponent,
  ]
})
export class WidgetsModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: WidgetsModule
    };
  }
}

export const widgetMap = {
  BarWidget: BarWidgetComponent,
  LineWidget: LineWidgetComponent,
  AreaWidget: AreaWidgetComponent,
  RadarWidget: RadarWidgetComponent,
};
