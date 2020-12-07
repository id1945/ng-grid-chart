import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

declare var zingchart: any;

@Component({
  selector: 'app-bar-widget',
  templateUrl: './bar-widget.component.html',
  styleUrls: ['./bar-widget.component.scss']
})
export class BarWidgetComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      zingchart.render({
        id: 'bar-graph',
        data: this.item.widget.config,
        height: '100%',
        width: '100%'
      });
    }, 0);
  }

  ngOnDestroy(): void {
    zingchart.exec('bar-graph', 'destroy');
  }

}
