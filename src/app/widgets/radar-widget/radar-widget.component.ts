import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

declare var zingchart: any;

@Component({
  selector: 'app-radar-widget',
  templateUrl: './radar-widget.component.html',
  styleUrls: ['./radar-widget.component.scss']
})
export class RadarWidgetComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      zingchart.render({
        id: 'radar-graph',
        data: this.item.widget.config,
        height: '100%',
        width: '100%'
      });
    }, 0);
  }

  ngOnDestroy(): void {
    zingchart.exec('radar-graph', 'destroy');
  }

}
