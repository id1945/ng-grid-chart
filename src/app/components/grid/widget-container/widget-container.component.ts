import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { widgetMap } from 'src/app/widgets/widgets.module';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {
  @ViewChild('widgetHost', { static: true, read: ViewContainerRef }) widgetHost;
  @Input() item: any;
  @Input() gridOptions: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    console.log(this.item, this.gridOptions);
    this.loadComponent(this.item.widget.type);
  }

  private loadComponent(componentTypeToRender): void {
    console.log('componentTypeToRender', componentTypeToRender);
    const c = this.componentFactoryResolver.resolveComponentFactory(widgetMap[componentTypeToRender]);
    const component = this.widgetHost.createComponent(c);
    component.instance.item = this.item;
  }
}
